import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, email,length,numericality } from 'redux-form-validators'
import { renderField } from './shared/renders'

let FormCode = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text"
                   component={renderField} label="Username"
                   validate={[ required(), length({min:1, max: 50}) ]}
            />
            <Field name="email" type="email"
                   component={renderField} label="Email"
                   validate={[required(), email()]}
                   //warn={aol}
            />
            <Field name="age" type="number"
                   component={renderField} label="Age"
                   validate={[ required(), numericality() ]}
                   //warn={tooOld}
            />
            <div>
                <button type="submit" disabled={submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

FormCode = reduxForm({
    form: 'contact'

})(FormCode);

export default FormCode;