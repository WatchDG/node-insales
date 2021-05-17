export type FieldId = number;
export type FieldType =
  | 'Field::TextField'
  | 'Field::TextArea'
  | 'Field::Checkbox'
  | 'Field::FileField'
  | 'Field::Delivery'
  | 'Field::PickPoint';
export type FieldOfficeTitle = string;
export type FieldDestiny = string;
export type CreateField = {
  field: {
    type: FieldType;
    office_title: FieldOfficeTitle;
    destiny: FieldDestiny;
  };
};
export type Field = {
  id: FieldId;
  destiny: FieldDestiny;
  office_title: FieldOfficeTitle;
};
