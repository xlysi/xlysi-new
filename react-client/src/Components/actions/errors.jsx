export const getErrors = (errors) => ({
    type: 'GET_ERRORS',
    errors
  });
  
  export const resetErrors = () => ({
    type: 'RESET_ERRORS'
  });