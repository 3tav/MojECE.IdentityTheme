export const ERROR = "error"
export const SUCCESS = "success"
export const WARNING = "warning"
export const INFO = "info"

export const STATUS = [ERROR, SUCCESS, WARNING, INFO]

export const getStatus = (
  status: "error" | "success" | "warning" | "info" | undefined
) => (status && STATUS.includes(status) ? status : INFO)
