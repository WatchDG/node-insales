type FieldId = number;
type FieldType =
  | 'Field::TextField'
  | 'Field::TextArea'
  | 'Field::Checkbox'
  | 'Field::FileField'
  | 'Field::Delivery'
  | 'Field::PickPoint';
type FieldOfficeTitle = string;
type FieldDestiny = string;
type CreateField = {
  field: {
    type: FieldType;
    office_title: FieldOfficeTitle;
    destiny: FieldDestiny;
  };
};
