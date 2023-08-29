import { Heading } from '@kuma-ui/core'

export function Header({ text }: { text: string }): JSX.Element {
  return <Heading fontSize="2em">{text}</Heading>
}
