export interface ErrorCode {
  code: string,
  message: string
}

export const PLAYER_EXISTS: ErrorCode = {
  code: '000-1',
  message: 'The player already exists'
}

export const PLAYER_SESSION_STARTED: ErrorCode = {
  code: '000-2',
  message: 'The player session has already started'
}