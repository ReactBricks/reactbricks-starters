import classNames from 'classnames'
import {
  Repeater,
  types,
  sendFormSubmission,
  useReactBricksContext,
  fetchForms,
} from 'react-bricks/frontend'
import { useForm } from 'react-hook-form'
import blockNames from '../../blockNames'
import { buttonColors } from '../../colors'
import { LayoutProps } from '../../LayoutSideProps'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import {
  createSubmissionError,
  FormSubmissionError,
} from '../../shared/FormNewsletter/NewsletterUtils'

export interface FormBuilderProps extends LayoutProps {
  buttonPosition: string
  formElements: types.RepeaterItems
  formButtons: types.RepeaterItems
  formId: string
  successMessage: string
}

const FormBuilder: types.Brick<FormBuilderProps> = ({
  buttonPosition,
  formElements,
  formButtons,
  formId,
  successMessage,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    setError,
  } = useForm()

  const { executeRecaptcha } = useGoogleReCaptcha()
  const rbContext = useReactBricksContext()

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
          fetchOptions: { apiPrefix: rbContext.apiPrefix },
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

  return isSubmitSuccessful ? (
    <h2 className="mt-6 text-xl leading-7 font-bold text-lime-600">
      {successMessage}
    </h2>
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-4 p-6"
    >
      <Repeater
        propName="form-elements"
        items={formElements}
        itemProps={{ register, errors }}
      />

      {errors.root && (
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

      <Repeater
        propName="form-buttons"
        items={formButtons}
        itemProps={{ disabled: isSubmitting }}
        renderWrapper={(items) => (
          <div
            className={classNames(
              'w-full flex space-x-6 col-span-2',
              buttonPosition
            )}
          >
            {items}
          </div>
        )}
      />
    </form>
  )
}

FormBuilder.schema = {
  name: blockNames.FormBuilder,
  label: 'Form',
  category: 'contact',
  hideFromAddMenu: true,
  previewImageUrl: `/bricks-preview-images/${blockNames.FormBuilder}.png`,
  repeaterItems: [
    {
      name: 'form-elements',
      label: 'Form elements',
      items: [
        { type: blockNames.FormInput },
        { type: blockNames.FormTextArea },
        { type: blockNames.FormCheckbox },
        { type: blockNames.FormSelect },
        { type: blockNames.FormRadiobuttons },
      ],
    },
    {
      name: 'form-buttons',
      itemLabel: 'Button',
      itemType: blockNames.Button,
      min: 1,
      max: 2,
    },
  ],

  sideEditProps: [
    {
      groupName: 'Form data',
      defaultOpen: true,
      props: [
        {
          name: 'formId',
          label: 'Form',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            getOptions: async () => {
              const apiPrefix = useReactBricksContext().apiPrefix
              const items = await fetchForms({ apiPrefix })

              return [
                { value: '', label: '--Select Form--' },
                ...items.map((item) => ({
                  value: item.id,
                  label: item.name,
                })),
              ]
            },
          },
        },
        {
          name: 'successMessage',
          label: 'Success Message',
          type: types.SideEditPropType.Textarea,
        },
      ],
    },
    {
      groupName: 'Buttons',
      defaultOpen: true,
      props: [
        {
          name: 'buttonPosition',
          label: 'Buttons position',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'justify-start', label: 'Left' },
              { value: 'justify-center', label: 'Center' },
              { value: 'justify-end', label: 'Right' },
            ],
          },
        },
      ],
    },
  ],

  getDefaultProps: () => ({
    buttonPosition: 'justify-center',
    'form-elements': [
      {
        type: blockNames.FormInput,
        props: {
          fieldName: 'firstname',
          isRequired: false,
          inputType: 'text',
          columns: '1',
          label: 'First Name',
          requiredError: '',
          pattern: '',
          patternError: '',
        },
      },
      {
        type: blockNames.FormInput,
        props: {
          fieldName: 'lastname',
          isRequired: false,
          inputType: 'text',
          columns: '1',
          label: 'Last Name',
          requiredError: '',
          pattern: '',
          patternError: '',
        },
      },
      {
        type: blockNames.FormInput,
        props: {
          fieldName: 'email',
          isRequired: true,
          inputType: 'email',
          columns: '2',
          label: 'Email',
          requiredError: 'Email is required',
          pattern: '',
          patternError: '',
        },
      },
      {
        type: blockNames.FormTextArea,
        props: {
          fieldName: 'message',
          isRequired: false,
          columns: '2',
          label: 'Message',
          requiredError: '',
          pattern: '',
          patternError: '',
        },
      },
      {
        type: blockNames.FormCheckbox,
        props: {
          fieldName: 'privacy',
          isRequired: true,
          columns: '2',
          label: 'I accept the processing of my data',
          requiredError: 'Please, accept our privacy terms',
          pattern: '',
          patternError: '',
        },
      },
    ],
    'form-buttons': [
      {
        type: 'button',
        buttonType: 'submit',
        buttonColor: buttonColors.SKY.value,
        text: 'Send',
        variant: 'solid',
      },
    ],
  }),
}

export default FormBuilder
