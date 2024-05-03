import * as c from '@src/containers/simulation/ReportStyle.tsx'
import LightIcon from '@src/assets/lightBulbIcon.svg'
import useSimulationStore from '@src/stores/simulationStore'

const reportSummary = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { subCategory, bulidingSize, floor } = useSimulationStore()

  return (
    <c.Container>
      <c.SummaryContainer>
        <c.SummaryHeader>
          <c.LightIcon src={LightIcon} alt="close" />
          <c.HighLight>핵심 요약 분석</c.HighLight>
        </c.SummaryHeader>
        <c.SummaryBody>
          <c.BodyTop>
            <c.BodyTopTitle>5,456만원</c.BodyTopTitle>
            <c.BodyTopSubTitle>
              주변상권 및 업종을 반영하여 계산한 비용으로 실제와 다를 수
              있습니다.
            </c.BodyTopSubTitle>
          </c.BodyTop>
          <c.SplitLine />
          <c.BodyBottom>
            <c.BodyBottomLeft>
              {['지역', '업종', '면적', '층'].map(data => (
                <c.BottomText key={data}>{data}</c.BottomText>
              ))}
            </c.BodyBottomLeft>
            <c.BodyBottomRight>
              <c.BottomText>종로구 부암동</c.BottomText>
              <c.BottomText>{subCategory}</c.BottomText>
              <c.BottomText>{bulidingSize}㎡</c.BottomText>
              <c.BottomText>{floor}</c.BottomText>
            </c.BodyBottomRight>
          </c.BodyBottom>
        </c.SummaryBody>
      </c.SummaryContainer>
    </c.Container>
  )
}

export default reportSummary