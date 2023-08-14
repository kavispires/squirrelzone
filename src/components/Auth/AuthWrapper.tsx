import { ReactNode } from 'react';
import { Form, Input, Modal } from 'antd';
import { useAuthContext } from 'hooks/useAuthContext';
import { LogoIcon, LogoText } from 'components/Logos';
import './AuthWrapper.scss';

type AuthWrapperProps = {
  children: ReactNode;
};

type FieldType = {
  email?: string;
  password?: string;
};

export function AuthWrapper({ children }: AuthWrapperProps) {
  const { isAuthenticated, isLoading, signIn } = useAuthContext();
  const [form] = Form.useForm();

  const onFinish = () => {
    signIn({ email: form.getFieldValue('email'), password: form.getFieldValue('password') });
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <Form
      name="auth-form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      form={form}
      autoComplete="off"
    >
      <Modal
        title={
          <div className="auto-wrapper-logo">
            <LogoIcon className="auto-wrapper-logo__logo" />
            <LogoText className="auto-wrapper-logo__logo-text" />
          </div>
        }
        open={!isAuthenticated}
        okText={<>{isLoading ? 'Signing In' : 'Sign In'}</>}
        onOk={onFinish}
        confirmLoading={isLoading}
        cancelButtonProps={{ style: { display: 'none' } }}
        closable={false}
      >
        <Form.Item<FieldType>
          label="E-mail"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item> */}
      </Modal>
    </Form>
  );
}
