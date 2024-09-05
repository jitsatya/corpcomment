import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore"
import HashTagItem from "./HashTagItem"

function HashTagList() {
  // const {companyList, setSelectedCompany} = useFeedbackItemsContext()

  const companyList = useFeedbackItemsStore(state=>state.getCompanyList())
  const selectCompany = useFeedbackItemsStore(state=>state.selectCompany)
  return (
    <ul className="hashtags">
    {companyList.map((company) => (
      <HashTagItem key={company} onSelect={selectCompany}>{company}</HashTagItem>
    ))}
    </ul>
  )
}

export default HashTagList
