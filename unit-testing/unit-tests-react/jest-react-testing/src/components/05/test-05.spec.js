import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import SimpleAPIForm from './test-05';
import * as APIService from './api';

jest.mock('./api');

test.only('form makes a api call with proper params', async  () => {
  APIService.getData.mockResolvedValueOnce({ok : true});
  const {getByText, getByLabelText, debug} = render(<SimpleAPIForm/>);
  const inputField = getByLabelText(/Body:/i);
  const submitBtn = getByText(/Post/i);
  fireEvent.change(inputField, {'target': {'value' : 'sample title'}});
  fireEvent.click(submitBtn);
  debug(submitBtn);
  expect(APIService.getData).toHaveBeenCalledTimes(1)
  expect(APIService.getData).toHaveBeenCalledWith("sample title")
  await wait(() => null)
})