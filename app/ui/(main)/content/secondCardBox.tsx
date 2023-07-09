import {
  CardIconWrapper,
  CardLayoutWrapper,
  CardSecondWrapper,
  CardTitle,
  CardTxTWrapper,
  CardWrapper,
} from "../styled/secondContent.styled"

interface Cdata {
  name: string
  value: string
  during: string
  nameColor: string
  valueColor: string
  icon: () => JSX.Element
}

const CardBox = ({ data }: { data: Cdata }) => {
  const Icon = data.icon
  return (
    <CardLayoutWrapper>
      <CardWrapper>
        <CardSecondWrapper>
          <CardIconWrapper>
            <Icon />
          </CardIconWrapper>
          <CardTxTWrapper>
            <CardTitle color={data.valueColor}>{data.value}</CardTitle>
            <CardTitle color={data.nameColor}>{data.name}</CardTitle>
            <div>{data.during}</div>
          </CardTxTWrapper>
        </CardSecondWrapper>
      </CardWrapper>
    </CardLayoutWrapper>
  )
}

export default CardBox
