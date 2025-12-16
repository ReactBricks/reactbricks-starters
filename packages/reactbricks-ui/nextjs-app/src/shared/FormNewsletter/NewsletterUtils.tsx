export type FormSubmissionError = Error & {
  submissionType?: string
  originalError?: unknown
}

export const createSubmissionError = (
  submissionType: string,
  message: string,
  cause?: unknown
): FormSubmissionError => {
  const error = new Error(message) as FormSubmissionError
  error.name = 'FormSubmissionError'
  error.submissionType = submissionType
  if (cause !== undefined) {
    error.originalError = cause
  }
  return error
}
