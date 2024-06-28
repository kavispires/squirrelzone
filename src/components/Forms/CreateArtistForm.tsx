import { Button, Col, ColorPicker, Form, Input, InputNumber, Row, Select } from 'antd';
import { capitalize } from 'lodash';
import { BUILD, HEIGHT, SPECIES, TRACKS } from 'types';

export function CreateArtistForm() {
  const [form] = Form.useForm();

  return (
    <Row>
      <Col span={12}>
        <Form
          name="artist"
          form={form}
          // defaultValue={{
          //   name: '',
          //   dna: '',
          //   colorHsl: '',
          //   age: 14,
          //   track: '',
          //   species: '',
          //   height: '',
          //   build: '',
          //   fullName: '',
          //   codename: '',
          //   tagline: '',
          // }}
        >
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="DNA" name="dna">
            <Input />
          </Form.Item>
          <Form.Item label="Color" name="colorHsl">
            <ColorPicker />
          </Form.Item>
          <Form.Item label="Age" name="age">
            <InputNumber min={14} />
          </Form.Item>
          <Form.Item label="Track" name="track">
            <Select>
              <Select.Option value="">Select option</Select.Option>
              {Object.keys(TRACKS).map((entry) => (
                <Select.Option key={entry} value={entry}>
                  {capitalize(entry)}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Species" name="species">
            <Select>
              <Select.Option value="">Select option</Select.Option>
              {Object.keys(SPECIES).map((entry) => (
                <Select.Option key={entry} value={entry}>
                  {capitalize(entry)}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Height" name="height">
            <Select>
              <Select.Option value="">Select option</Select.Option>
              {Object.keys(HEIGHT).map((entry) => (
                <Select.Option key={entry} value={entry}>
                  {capitalize(entry)}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Build" name="build">
            <Select>
              <Select.Option value="">Select option</Select.Option>
              {Object.keys(BUILD).map((entry) => (
                <Select.Option key={entry} value={entry}>
                  {capitalize(entry)}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Full Name" name="fullName">
            <Input />
          </Form.Item>
          <Form.Item label="Codename" name="codename">
            <Input />
          </Form.Item>
          <Form.Item label="Tag Line" name="tagline">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button>Submit/Update</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
