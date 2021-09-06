import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { fieldToTextField } from 'formik-material-ui';
import { TextField, Button } from '@material-ui/core';

const styles = () => ({
  Form__Button: {
    margin: '10px 20px',
  },
});

const BasicFormSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required(
      'Без карты вам придётся оплачивать покупки наличными при получении'
    )
    .matches(/^[0-9]+$/, 'Номер карты должен содержать только цифры')
    .length(16, 'Номер карты должен содержать 16 цифр')
});

const UppercasingTextField = props => {
  const inputProps = {
    'data-testid': props['data-id']
  };

  return (
    <TextField
      {...fieldToTextField(props)}
      inputProps={inputProps}
      onChange={event => {
        const { value } = event.target;
        props.form.setFieldValue(props.field.name, value ? value : '');
      }}
    />
  )
};

class App extends Component {
  state = {
    isCardAdded: false,
  };

  renderForm() {
    const { cardNumber, classes } = this.props;

    return (
      <Formik
        initialValues={{
          cardNumber: cardNumber
        }}
        validationSchema={BasicFormSchema}
        onSubmit={() => {
          this.setState({
            isCardAdded: true,
          });
        }}
        render={({ submitForm }) => (
          <Form className="Form" data-testid="Form">
            <Field
              className="CardNumberInput"
              type="text"
              name="cardNumber"
              label="Номер карты"
              data-id="CardNumberInput"
              component={UppercasingTextField}
            />
            <Button
              className={`SaveButton ${classes.Form__Button}`}
              type="submit"
              variant="contained"
              color="primary"
              onClick={submitForm}
              data-testid="SaveButton"
            >
              Сохранить
            </Button>
          </Form>
        )}
      />
    );
  }

  renderAlert() {
    return <div className="SuccessAlert" data-testid="SuccessAlert">Карта добавлена</div>;
  }

  render() {
    const { isCardAdded } = this.state;

    return (
      <div className="App" data-testid="App">
        {isCardAdded ? this.renderAlert() : this.renderForm()}
      </div>
    );
  }
}

export default withStyles(styles)(App);