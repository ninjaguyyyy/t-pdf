// eslint-disable-next-line import/named
import { Input, InputProps } from 'antd';
import { Control, Controller } from 'react-hook-form';

type Props = InputProps & {
  name: string;
  className?: string;
  control: Control<any>;
  defaultValue?: unknown;
};

export default function InputField(props: Props) {
  const { name, control, defaultValue, ...textFieldProps } = props;
  const defaultValueInput = defaultValue !== undefined ? defaultValue : '';

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValueInput}
      render={({ field }) => {
        return <Input {...textFieldProps} {...field} />;
      }}
    />
  );
}
