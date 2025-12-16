'use client'

import { useContext } from 'react'
// import { useSubmit } from '@formspree/react'

import { FormBuilderContext } from './FormBuilderProvider'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import {
  useReactBricksContext,
  sendFormSubmission,
} from 'react-bricks/rsc/client'
import {
  createSubmissionError,
  FormSubmissionError,
} from '../../shared/FormNewsletter/NewsletterUtils'

export interface FormBuilderClientProps {
  formId: string
  successMessage: string
  children: any
}

const FormBuilderClient: React.FC<FormBuilderClientProps> = ({
  formId,
  successMessage,
  children,
}) => {
  const { register, setError, handleSubmit, errors, isSubmitSuccessful } =
    useContext(FormBuilderContext)

  const { executeRecaptcha } = useGoogleReCaptcha()
  const rbContext = useReactBricksContext()

  // const onSubmit = useSubmit(formspreeFormId, {
  //   onError(errs) {
  //     const formErrs = errs.getFormErrors()

  //     for (const { code, message } of formErrs) {
  //       setError &&
  //         setError(`root.${code}`, {
  //           type: code,
  //           message,
  //         })
  //     }

  //     const fieldErrs = errs.getAllFieldErrors()
  //     for (const [field, errs] of fieldErrs) {
  //       setError &&
  //         setError(field, {
  //           message: errs.map((e) => e.message).join(', '),
  //         })
  //     }
  //   },
  // })

  const onSubmit = async ({ email, ...data }: any) => {
    try {
      if (!executeRecaptcha) {
        throw createSubmissionError(
          'recaptchaUnavailable',
          'reCAPTCHA is not available. Please reload the page and try again.'
        )
      }

      let token: string | undefined
      try {
        token = await executeRecaptcha('form_submit')
      } catch (err) {
        console.log(err)
        throw createSubmissionError(
          'recaptchaExecution',
          'Failed to execute reCAPTCHA. Please try again.',
          err
        )
      }

      if (!token) {
        throw createSubmissionError(
          'recaptchaToken',
          'Failed to verify reCAPTCHA token. Please try again.'
        )
      }

      let result: Awaited<ReturnType<typeof sendFormSubmission>>
      try {
        result = await sendFormSubmission({
          appId: rbContext.appId,
          appEnv: rbContext.environment,
          token,
          formId,
          emailAddress: email,
          data,
        })
      } catch (err) {
        throw createSubmissionError(
          'submissionNetwork',
          'We were unable to submit your form. Please check your connection and try again.',
          err
        )
      }

      if (!result.success) {
        const message =
          'There was a problem sending your request. Please try again.'

        throw createSubmissionError('submissionFailed', message)
      }
    } catch (err) {
      const fallbackMessage =
        'There was a problem sending your request. Please try again.'
      const submissionError =
        err instanceof Error
          ? (err as FormSubmissionError)
          : createSubmissionError('submission', fallbackMessage, err)
      if (
        !(err instanceof Error) &&
        submissionError.originalError === undefined
      ) {
        submissionError.originalError = err
      }
      const message = submissionError.message || fallbackMessage
      const type = submissionError.submissionType || 'submission'
      if (setError) {
        setError(`root.${type}` as any, {
          type,
          message,
        })
      }
      throw submissionError
    }
  }
  console.log('SUBMITTED - ', formId)

  if (!register || !handleSubmit) {
    return null
  }

  return (
    <>
      {isSubmitSuccessful ? (
        <h2 className="mt-6 text-xl leading-7 font-bold text-lime-600">
          {successMessage}
        </h2>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4 p-6"
        >
          {children}

          {errors && errors.root && (
            <div className="block">
              <ul className="error">
                {Object.values(errors.root).map((err) => {
                  if (typeof err !== 'object') {
                    return (
                      <li
                        key={err}
                        className="block mt-1 text-sm text-red-500 font-bold"
                      >
                        {err}
                      </li>
                    )
                  }
                  const { type, message } = err
                  return (
                    <li
                      key={type}
                      className="block mt-1 text-sm text-red-500 font-bold"
                    >
                      {message}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </form>
      )}
    </>
  )
}

export default FormBuilderClient
