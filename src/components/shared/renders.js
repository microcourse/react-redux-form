import React from "react";

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="control-label">{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

export const renderSingleSelect = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="control-label">{label}</label>
        <div>
            Single select pace holder
        </div>
    </div>
)

export const renderMultiSelect = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="control-label">{label}</label>
        <div>
            <label className="control-label">{label}</label>
            <div>
                MultiSelect
            </div>
        </div>
    </div>
)


export const renderDatePicker = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="control-label">{label}</label>
        <div>
            <label className="control-label">{label}</label>
            <div>
                DatePicker select pace holder
            </div>
        </div>
    </div>
)
