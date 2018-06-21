const Console = console;

const logger = {
  record: info => {
    Console.log(info);
  },
  error: err => {
    Console.error(err);
  },
};

export default logger;
