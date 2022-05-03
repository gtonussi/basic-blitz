import { Ctx } from "blitz"

import db from "db"

export default async function participateInMeetup(meetupId: number, ctx: Ctx) {
  ctx.session.$authorize()

  await db.meetup.update({
    where: {
      id: meetupId,
    },
    data: {
      participants: {
        connect: {
          id: ctx.session.userId,
        },
      },
    },
  })
}
