import { BlitzPage, useParam, useQuery, invoke } from "blitz"
import { Suspense } from "react"

import getMeetup from "app/queries/getMeetup"
import participateInMeetup from "app/mutations/participateInMeetup"

const MeetUpDetails = () => {
  const meetupId = useParam("meetupId", "number")!
  const [meetup] = useQuery(getMeetup, meetupId)

  return (
    <main>
      <h1>Hello World</h1>
      <p>Id: {meetupId}</p>
      <p>Subject: {meetup.subject}</p>
      <p>Date: {meetup.date.toLocaleDateString()}</p>

      <button
        onClick={async () => {
          await invoke(participateInMeetup, meetupId)
          window.alert("You were added to the meetup")
        }}
      >
        Participate
      </button>
    </main>
  )
}

const MeetupDetailsPage: BlitzPage = () => {
  return (
    <Suspense fallback="Loading meetup...">
      <MeetUpDetails />
    </Suspense>
  )
}

export default MeetupDetailsPage
