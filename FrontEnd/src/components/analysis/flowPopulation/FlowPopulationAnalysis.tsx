import CategoryTitleCard from '@src/components/analysis/CategoryTitleCard'
import TodayChart from '@src/components/analysis/flowPopulation/TodayChart'
import WeekChart from '@src/components/analysis/flowPopulation/WeekChart'
import AgeChart from '@src/components/analysis/flowPopulation/AgeChart'
import TimeChart from '@src/components/analysis/flowPopulation/TimeChart'
import * as f from '@src/components/styles/analysis/FlowPopulationAnalysisStyle'

const FlowPopulationAnalysis = () => {
  return (
    <>
      <CategoryTitleCard title="유동인구" />
      <f.FirstLowContainer>
        <f.TodayChart>
          <TodayChart />
        </f.TodayChart>
        <f.WeekChart>
          <WeekChart />
        </f.WeekChart>
      </f.FirstLowContainer>
      <f.SecondLowContainer>
        <f.AgeChart>
          <AgeChart />
        </f.AgeChart>
        <f.TimeChart>
          <TimeChart />
        </f.TimeChart>
      </f.SecondLowContainer>
    </>
  )
}

export default FlowPopulationAnalysis
