import { Repeater, types, fetchForms } from 'react-bricks/rsc'
import classNames from 'classnames'
import blockNames from '../../blockNames'
import { buttonColors } from '../../colors'
import FormBuilderClient from './FormBuilderClient'
import FormBuilderProvider from './FormBuilderProvider'
import { useReactBricksContext } from 'react-bricks/rsc/client'

export interface FormBuilderProps {
  successMessage: string
  formId: string
  buttonPosition: string
  formElements: types.RepeaterItems
  formButtons: types.RepeaterItems
}

const FormBuilder: types.Brick<FormBuilderProps> = ({
  successMessage,
  formId,
  buttonPosition,
  formElements,
  formButtons,
}) => {
  return (
    <div>
      <FormBuilderProvider>
        <FormBuilderClient formId={formId} successMessage={successMessage}>
          <Repeater propName="formElements" items={formElements} />

          <Repeater
            propName="formButtons"
            items={formButtons}
            // itemProps={{ disabled: isSubmitting }}
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
        </FormBuilderClient>
      </FormBuilderProvider>
    </div>
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
      name: 'formElements',
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
      name: 'formButtons',
      itemLabel: 'Button',
      itemType: blockNames.Button,
      min: 0,
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
    formElements: [
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
    formButtons: [
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
