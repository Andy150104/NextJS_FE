// BaseControlTextField.tsx
import React, { useMemo } from "react";
import { Form, Input } from "antd";
import type { Rule } from "antd/lib/form";
import { XmlColumn } from "Nova/utils/xmlColumn";
import { buildRules } from "Nova/utils/antValidation";

export interface BaseControlTextFieldProps {
  xmlColumn: XmlColumn;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  type?: string;
  maxlength: number;
}

const BaseControlTextField: React.FC<BaseControlTextFieldProps> = ({
  xmlColumn,
  placeholder = "",
  disabled = false,
  readonly = false,
  type = "text",
  maxlength,
}) => {
  // id dùng để map label/htmlFor
  const fieldId = useMemo(() => xmlColumn.id, [xmlColumn.id]);
  // build rule từ xmlColumn.rules
  const rulesList = useMemo<Rule[]>(() => buildRules(xmlColumn), [xmlColumn]);

  return (
    <Form.Item
      name={xmlColumn.id}
      label={xmlColumn.name}
      rules={rulesList}
      validateTrigger="onBlur"
      style={{ marginBottom: 0 }}
    >
      {type === "password" ? (
        <Input.Password
          id={fieldId}
          disabled={disabled}
          readOnly={readonly}
          placeholder={placeholder}
          maxLength={maxlength}
        />
      ) : (
        <Input
          id={fieldId}
          type={type}
          disabled={disabled}
          readOnly={readonly}
          placeholder={placeholder}
          maxLength={maxlength}
        />
      )}
    </Form.Item>
  );
};

export default BaseControlTextField;
