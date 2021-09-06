interface Params {
  name: string
}

const registerUser = (params: Params) => {
  console.log({ name: params.name });
};

export { registerUser };
