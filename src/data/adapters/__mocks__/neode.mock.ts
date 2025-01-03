export function neodeMock() {
  return {
    fromEnv: () => {
      return {
        model: (_name: string, schema: any) => {
          return schema;
        },
      };
    },
  };
}
