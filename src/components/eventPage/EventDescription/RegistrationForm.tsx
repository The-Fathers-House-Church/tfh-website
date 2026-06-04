import { appAxios } from '@/api/axios';
import Button from '@/common/Button';
import Dropdown from '@/common/Dropdown';
import LabelInput from '@/common/LabelInput/LabelInput';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { capitalize } from '@/functions/stringManipulations';
import { EventType } from '@/types/types';
import { useFormik } from 'formik';
import * as yup from 'yup';

const RegistrationForm = ({ event }: { event: EventType }) => {
  interface inputType {
    name: string;
    type: string | 'text' | 'number' | 'dropdown' | 'email' | 'tel' | 'date' | 'url';
  }

  const formik = useFormik<any>({
    initialValues: {
      ...event.requiredRegistrationDetails.reduce(
        (initial, field: inputType) => ({
          ...initial,
          [field.name]: field.type !== 'number' ? '' : 0,
        }),
        {},
      ),
      loading: false,
    },
    onSubmit: () => {
      submitValues();
    },
    validationSchema: yup.object(
      event.requiredRegistrationDetails.reduce(
        (initial, field: inputType) => ({
          ...initial,
          [field.name]:
            field.type !== 'number'
              ? yup.string().required('Required')
              : yup.number().required('Required').typeError('Must be a number'),
        }),
        {},
      ),
    ),
  });

  const submitValues = async () => {
    formik.setFieldValue('loading', true);

    try {
      const response = await appAxios.post(`/event/${event.id}/register`, {
        ...event.requiredRegistrationDetails.reduce(
          (initial, field: inputType) => ({
            ...initial,
            [field.name]: formik.values[field.name],
          }),
          {},
        ),
      });

      sendFeedback(response.data?.message, 'success');

      formik.resetForm();
    } catch (error) {
      sendCatchFeedback(error);
    }

    formik.setFieldValue('loading', false);
  };

  return (
    <div className='w-full mt-[92px] flex flex-col'>
      <h2 className='text-primary font-bold font-secondary text-center mb-[52px] text-[30px] md:text-[40px]'>
        Register for the event
      </h2>
      <form className='flex flex-col w-full items-center' onSubmit={formik.handleSubmit}>
        <div className='flex w-full flex-col gap-[29px]'>
          {event.requiredRegistrationDetails.map((detail) => {
            if (detail.type === 'dropdown') {
              return (
                <Dropdown
                  useFormik={false}
                  values={
                    (detail.options &&
                      detail.options.split(',').map((item) => ({
                        label: item,
                        value: item,
                      }))) ||
                    []
                  }
                  label='Change Image'
                  name='changeImage'
                  formik={formik}
                  className='mb-5'
                  value={formik.values[detail.name]}
                  placeholder={capitalize(detail.name?.split('_')?.join(' '))}
                  error={formik.errors[detail.name] as any}
                  showError={
                    formik.touched[detail.name] && formik.errors[detail.name]
                      ? true
                      : false
                  }
                  onChange={() => {
                    formik.setFieldTouched(detail.name, true);
                  }}
                />
              );
            } else {
              return (
                <LabelInput
                  formik={formik}
                  key={detail.name}
                  name={detail.name}
                  placeholder={capitalize(detail.name?.split('_')?.join(' '))}
                  type={detail.type === 'date' ? 'date' : 'text'}
                />
              );
            }
          })}
        </div>
        <Button
          type='submit'
          className='!w-[313px] !max-w-full mt-10'
          loading={formik.values.loading}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
