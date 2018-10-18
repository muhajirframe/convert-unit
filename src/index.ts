interface Config {
  sizes: string[];
  divider: number;
}
const defaultConfig: Config = {
  sizes: ["Bytes", "KB", "MB", "GB", "TB"],
  divider: 1000
};

export function toClosestUnit(input: number, config: Config = defaultConfig) {
  if (input == 0) return "0 Byte";
  const i = Math.floor(Math.log(input) / Math.log(config.divider));
  const value = Math.round(input / Math.pow(config.divider, i));
  const size = config.sizes[i];
  return {
    value,
    size
  };
}
