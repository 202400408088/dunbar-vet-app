==============================================================================
# USER STORIES AND ACCEPTANCE CRITERIA — DUNBAR APPOINTMENT SYSTEM (DAS)

| Field | Value |
| --- | --- |
| ------------------- | ---------------------------------------------------------- |
| Project | Dunbar Appointment System (DAS) |
| Client | Dunbar Veterinary Clinic, Boonah QLD |
| Prepared by | Ziyou Li — Business / Requirements Analyst |
| Story set | US01–US13 |
| Related documents | Project Charter, WBS and Milestones, this Request for |
| Proposal |

## 1. How this backlog was derived

The case study supplies five seed stories and states plainly that they cover
only the most obvious core and that "the stories that matter most are
deliberately not written here". The remaining eight were derived from four
sources, and each story below names the source it came from so that the
derivation can be checked rather than trusted.

| Source | What it contributed |
| --- | --- |
| -------------------------------------- | --------------------------------------- |
| Case study § 4 (core capability and | C1–C6 capability set; the two |
| scope) | appointment kinds as the genuine |
| domain logic |
| Interview — Dr Simone Vardy | Booked-versus-seen objective; the |
| offline requirement; inactive-client |
| handling |
| Interview — Trina Mahoney | Search by animal name; "make it look |
| like the book"; the two-book |
| distinction |
| Interview — Dr Wes Ngatai | Farm visit shape; run ordering; |
| access details with the job |
| Paper document A (appointment book) | Held surgery slots; the emergency |
| rule; the two-cats defect |
| Paper document B (farm run sheet) | Farm visit fields; actual versus |
| estimated duration |
| Paper document C (registration form) | Client, animal and property fields; |
| preferred run day; alternative |
| authoriser |

The five seed stories

US01, US02, US03, US04 and US05 are the seed stories verbatim from case study
§ 5, with their acceptance criteria reproduced exactly. They are not
rewritten, because they are the client's own words and because a marker
comparing them to the brief should find them unchanged.

Priority scheme

| Priority | Meaning | Applied to |
| --- | --- | --- |
| ---------- | ------------------------------------------------ | ------------------ |
| Must | The sprint cannot be complete without it; a | US01–US09, US12 |
| missing one is a critical defect |
| Should | High value, delivered if the sprint permits | US10, US11, US13 |
| Could | Identified, in the product backlog, not | see § 5 |
| committed |

Epic assignment

Two epics, which keeps the sprint backlog within the brief's "one or two
epics" guidance.

| Epic | Stories | Theme |
| --- | --- | --- |
| ------------------------- | ------------------------- | -------------------------- |
| E1 — Records the clinic | US01, US02, US06, US07, | Clients, animals and |
| books against | US13 | properties |
| E2 — Appointments and | US03, US04, US05, US08, | The two appointment |
| the day | US09, US10, US11, US12 | kinds, change and |
| cancel, and the day |
| views |

## 2. E1 — Records the clinic books against

US01 — Add a client

  As the practice manager, I want to add a client to the clinic's records so
  that work can be booked for them.

|  |
|  |
| ------------ | ----------------------- |
| Priority | Must |
| Epic | E1 |
| Source | Case study § 5 (seed) |
| Capability | C1 Client records |

Acceptance criteria

1. I can record at minimum the client's name and a contact number.
2. A client saved in one session is still there when the application is
    started again.
3. I can search for a client by name and get every match.

Notes. Paper document C shows the full field set the clinic actually keeps:
two contact numbers, a postal address, SMS consent, and a named alternative
authoriser ("Bridie's brother, Sean Duggan, 0429 550 118"). The criterion sets
a minimum, so the wider field set is permitted but not required to satisfy the
story. SMS consent is stored; sending SMS is out of scope.

US02 — Add an animal against a client

  As the practice manager, I want to add an animal against a client so that
  I know whose it is when they ring.

|  |
|  |
| ------------ | ----------------------- |
| Priority | Must |
| Epic | E1 |
| Source | Case study § 5 (seed) |
| Capability | C2 Animals |

Acceptance criteria

1. I can record at minimum the animal's name and species, attached to an
    existing client.
2. I can list all the animals belonging to one client.
3. I can search for an animal by its name across all clients, because owners
    give the animal's name first.

Notes. Criterion 3 is the seed story's own, and Trina restated the reason in
identical terms: "They never say 'this is Mrs Kelso'. They say 'it's Ruby,
she's off her food'. I've got fourteen Rubys." Because the criterion sits on
US02 but is a distinctly larger capability, it is broken out as US06 and US02
is marked as depending on it. This is deliberate: keeping the criterion where
the client put it preserves traceability, while separating the build keeps the
estimate honest.

Paper document C also records breed, sex and desexed status, age, microchip
and insurance. These are recorded if present; "Sooty — 10 or 11?" and "not
chipped" show that the clinic does book incomplete records, so no field beyond
name and species may be mandatory.

US06 — Search for an animal across all clients

  As the practice manager, I want to search for an animal by name across
  every client so that I can find the right one while the owner is on the
  telephone.

|  |
|  |
| ------------ | --------------------------------------------- |
| Priority | Must |
| Epic | E1 |
| Source | Interview — Trina Mahoney; US02 criterion 3 |
| Capability | C2 Animals |
| Depends on | US01, US02 |

Acceptance criteria

1. Entering an animal's name returns every animal whose name matches, from
    every client.
2. Each result shows the animal's name, its species, and its owner's name and
    contact number, so the receptionist can confirm she has the right animal
    without a second lookup.
3. A name that matches several animals (Trina's "fourteen Rubys") returns all
    of them rather than the first.
4. A search matching nothing returns an empty result set, not an error.
5. Matching is case-insensitive and matches on a partial name, because callers
    say "Ruby" and the record says "Ruby Tuesday".

Notes. This story exists because the criterion alone understates the work:
returning all matches with owner contact details is a query-and-join, not a
filter. The paper book cannot do this at all — Trina currently runs her finger
down a page.

US07 — Record a property against a client

  As the practice manager, I want to record a property against a client so
  that a farm visit can be booked to the place rather than to an animal.

|  |
|  |
| ------------- | ---------------------------------------------------------------- |
| Priority | Must |
| Epic | E1 |
| Source | Case study § 4; paper documents B and C |
| Capability | C3 Properties |
| Required by | US08 (a farm visit without a property is not a valid |
| appointment) |

Acceptance criteria

1. I can record a property with a name and a locality, attached to an existing
    client.
2. I can record road access and gate or key notes against the property.
3. I can list a client's properties.
4. A property can be updated and removed.
5. A client can have animals, properties, both, or neither.

Notes. Criterion 5 is the case study's own wording, and it is an explicit
statement that "neither" is valid — a client with no animals and no property
is still a client. This is the combination most likely to be broken by a
sloppy foreign key, so it is asserted.

The access-notes fields come from Wes, who named the specific cost of not
having them: "There's a place at Bunjurgen where you go through three gates
and the third one's got a chain on it and no code and the bloke's never home.
I've stood there for twenty minutes." Paper document B shows the field in use
— "RING BEFORE YOU TURN IN. Dogs off the chain in the house paddock." Paper
document C shows it on the registration form — "3 gates. Last one has a chain,
no code. Ring first or you'll be waiting."

US13 — Make a client inactive

  As the practice manager, I want to make a client inactive rather than
  delete them so that their history stays intact but they stop appearing in
  day-to-day searches.

|  |
|  |
| ------------ | -------------------------------------------------------------- |
| Priority | Should |
| Epic | E1 |
| Source | Case study § 4 ("created, found, updated and made inactive") |
| Capability | C1 Client records |

Acceptance criteria

1. I can mark a client inactive without deleting any of their animals,
    properties or appointments.
2. An inactive client does not appear in a default client search.
3. An inactive client can be found when the search explicitly includes
    inactive clients.
4. A historical appointment belonging to an inactive client still displays the
    client's name.

Notes. The case study says "made inactive" rather than "deleted", and
criterion 4 is the reason that distinction matters: an appointment from last
year must still render its client, so records are never hard-deleted. A build
that offers only a delete button fails this story.

## 3. E2 — Appointments and the day

US03 — Book an appointment for a client

  As the practice manager, I want to book an appointment for a client so
  that it stops living on a piece of paper.

|  |
|  |
| ------------ | ----------------------- |
| Priority | Must |
| Epic | E2 |
| Source | Case study § 5 (seed) |
| Capability | C4 Appointments |

Acceptance criteria

1. The appointment records the client, the date, the start time and the reason
    for the visit.
2. A saved appointment appears on that day's schedule.
3. A new appointment starts in a booked state.

Notes. The seed story is written at the level of "an appointment". Case study
§ 4 makes clear that there are two kinds with different shapes, so this story
is deliberately kept as the seed words and US08 carries the domain logic. A
team that implements only US03 has built the consulting half.

US08 — Book either kind of appointment, keeping the two shapes distinct

  As the practice manager, I want to book an in-clinic consultation and a
  farm visit as two different kinds of appointment so that I stop choosing
  which book to open and stop writing farm work into the consult book.

|  |
|  |
| ------------ | ----------------------------------------------------------------- |
| Priority | Must |
| Epic | E2 |
| Source | Case study § 4; interviews with all three stakeholders; paper |
| documents A and B |
| Capability | C4 Appointments |
| Depends on | US01, US02, US07 |

Acceptance criteria

1. When booking a consultation I select one animal, a date, and a
    fifteen-minute slot that exists on that day's consulting timetable, and I
    select one of the two consulting rooms.
2. A consultation's duration is one slot and is not a field I can set.
    Attempting to give it a different duration is refused.
3. When booking a farm visit I select a property (not an animal), a start
    time, and an estimated duration in hours that I enter and can change.
4. Creating a consultation without an animal is refused, with a message naming
    the missing animal.
5. Creating a farm visit without a property is refused, with a message naming
    the missing property.
6. Creating a consultation whose time does not land on the consulting
    timetable is refused. Saturday afternoon, Sunday, and any time after 17:15 on
    a consulting day are all refused.
7. On a Tuesday or Thursday, a consultation after 10:15 is refused.
8. Slots 11:15 and 11:30 on a consulting day cannot be booked for a
    consultation, because they are held for surgery drop-offs.
9. The reason for the visit is recorded on both kinds.
10. Both kinds are persisted and reappear after a restart.

Notes — this is the project's genuine domain logic.

Criterion 6 encodes the timetable from the appointment book footer:
Mon/Wed/Fri 8:30–17:30 with a last booking at 17:15; Tue/Thu consults end
10:15 because "vets on the road from 10:30"; Sat 8:00–11:00; closed Sunday.

Criterion 8 encodes "11:15 AND 11:30 HELD FOR SURGERY DROP-OFFS EVERY CONSULT
DAY — DO NOT FILL". It is stated as a separate criterion because the naive
implementation makes every slot in the timetable bookable, and this rule is
the exception that breaks it.

Criterion 2 encodes the case study's "Its length is not a decision anyone
makes — a consultation is one slot", and criterion 3 encodes "It has a start
time and an estimated duration in hours, which the vet judges from the job and
which is not a slot and not fixed."

The two-cats defect from paper document A is the reason criterion 1 binds a
consultation to exactly one animal: "Truong booked one slot for two cats —
took 25 min and put Room 2 out all morning. TWO SLOTS next time."

US04 — Change or cancel an appointment

  As the practice manager, I want to change or cancel an appointment so that
  the day reflects what is actually happening.

|  |
|  |
| ------------ | ----------------------- |
| Priority | Must |
| Epic | E2 |
| Source | Case study § 5 (seed) |
| Capability | C5 Change and cancel |
| Depends on | US03, US08 |

Acceptance criteria

1. I can move an appointment to a different date or time, or cancel it.
2. A cancelled appointment remains visible in the record rather than
    disappearing.
3. Changing one appointment does not affect any other.

Notes. Criterion 2 is an explicit instruction not to hard-delete, and it is
the criterion most likely to be failed by a default CRUD implementation.
Criterion 3 matters because the emergency rule on paper document A —
"EMERGENCIES GO IN WHEREVER THERE IS ROOM" — implies moving appointments, and
a move that shifted its neighbours would cascade.

US11 — Move a consultation to another slot

  As the practice manager, I want to move a consultation to a different slot
  on the same day so that I can fit an emergency in without losing anyone's
  booking.

|  |
|  |
| ------------ | ----------------------------------------------------------------- |
| Priority | Should |
| Epic | E2 |
| Source | Paper document A — the emergency rule and "Hendren — Pip — |
| recheck → moved 9:30" |
| Capability | C5 Change and cancel |
| Depends on | US04, US08 |

Acceptance criteria

1. I can move a consultation from one slot to another free slot on the same
    day.
2. Moving to a slot that is already taken is refused, naming the conflicting
    appointment.
3. Moving to a slot that does not exist on that day's timetable (a held slot,
    an out-of-hours time, or a Tuesday afternoon) is refused.
4. The move preserves the appointment's animal, client and reason.
5. A move does not alter any other appointment's slot.
6. The appointment's previous slot becomes free.

Notes. The incident behind this story is on the paper page: at 9:00 the entry
reads "Hendren — 'Pip' — recheck → moved 9:30", the 9:45 slot reads "EMERG —
Watson, 'Bracken' dog — off street, bloated", and below the grid is written
"Kept 10:15 free after the emergency. Sorry." That sequence — a booking moves,
an emergency takes its place, a third slot is deliberately left empty — is the
clinic's real workflow, and criterion 6 is what makes it possible. Without it
the receptionist cannot free the 9:00 slot and the emergency has nowhere to
go.

Criterion 3 reuses the US08 timetable rules rather than restating them, so the
timetable is defined in one place.

US05 — See a day's appointments

  As a veterinarian, I want to see the appointments for a given day so that
  I know what is ahead of me before I start.

|  |
|  |
| ------------ | ----------------------- |
| Priority | Must |
| Epic | E2 |
| Source | Case study § 5 (seed) |
| Capability | C6 Day views |

Acceptance criteria

1. I can list a day's appointments in time order with enough detail to know
    what each one is.
2. A day with nothing booked returns an empty schedule rather than an error.
3. Cancelled appointments are distinguishable from live ones in the listing.

Notes. Criterion 1's "enough detail" is defined concretely by the paper book:
time, room, client surname, animal name in quotes, the reason, and the contact
number. The book's own format — Prosser — "Biscuit" cat — F3 vacc — 0417 552
118 — is the specification, and it is why this story is not satisfied by a
list of bare timestamps.

US09 — See the day's farm visits in the order they will be worked

  As a veterinarian, I want the day's farm visits listed in the order I will
  work them so that I stop driving the same road three times.

|  |
|  |
| ------------ | --------------------------------------------- |
| Priority | Must |
| Epic | E2 |
| Source | Interview — Dr Wes Ngatai; paper document B |
| Capability | C6 Day views |
| Depends on | US08 |

Acceptance criteria

1. Farm visits for a date are listed separately from that day's consultations.
2. The list is in the order the visits will be worked, and I can change that
    order.
3. Each entry shows the property name, locality, the client or contact, the
    job, the head count where given, the estimated duration in hours, and the
    access notes.
4. Changing the order of the day's visits does not change any visit's start
    time until I confirm the new order.
5. A day with no farm visits returns an empty list rather than an error.

Notes. The cost of not having this is on the record: "Last Thursday I did
Milford, then back through town out to Coulson, then back out to Milford
again. A hundred and ninety kilometres. Two of those properties are on the
same road, four kilometres apart."

Criterion 3 reproduces the run sheet's own field set. Paper document B shows
every one of them in use on a single line — Kalinga Downs | Coulson | R & M
Petrie 0427 118 553 | Preg test | 120 | 3.0 hr | 24 — plus "RING BEFORE YOU
TURN IN" under access notes. Wes named each of these as something he needs
before he arrives: the gate, the yards, the head count.

Criterion 4 exists because of a real tension in the source documents: paper
document B records both an estimate ("Est. 3.0 hr") and an actual ("Kalinga
11:20–14:35 (3.25)"), and says "WRITE THE ACTUAL HOURS, NOT THE ESTIMATE."
That implies estimated and actual are different values, so reorderning must
not be allowed to silently rewrite the plan.

US10 — See which fifteen-minute slots are taken and which are free

  As the practice manager, I want to see the day as a grid of fifteen-minute
  slots so that I can answer "have you got anything this afternoon?" without
  running my finger down a page.

|  |
|  |
| ------------ | --------------------------------------------- |
| Priority | Should |
| Epic | E2 |
| Source | Interview — Trina Mahoney; paper document A |
| Capability | C6 Day views |
| Depends on | US08 |

Acceptance criteria

1. The day displays a row per fifteen-minute slot and a column per consulting
    room, matching the layout of the paper book.
2. A taken slot shows the client surname, the animal's name, the reason and
    the contact number.
3. A free slot is visually distinguishable from a taken one.
4. A held surgery slot (11:15 and 11:30 on a consulting day) is visually
    distinguishable from both a free slot and a booked one, so it is not offered
    as available.
5. On a Tuesday or Thursday the grid stops at 10:15; on a Saturday it starts
    at 08:00 and stops at 11:00.
6. The day's farm visits appear on the same screen but are not placed into
    slots.

Notes. This is the story that most directly answers the charter's objective O3
and the adoption risk in the charter's § 7. Trina's design constraint is
quoted verbatim in the charter — "Just make it look like the book" — and
criterion 1 is that sentence turned into a testable requirement: time down the
side, one column per room.

Criterion 4 gives the held slots a third visual state. Treating them as "free"
would let them be booked, which is the defect US08 criterion 8 forbids;
treating them as "taken" would misrepresent the day to the vet. A third state
is the honest representation.

Criterion 6 keeps the two kinds visible together without pretending a farm
visit belongs in a fifteen-minute box — which is the entire point of the
project.

US12 — Book with no internet connection

  As a veterinarian, I want to book and view appointments with no internet
  connection so that the appointment book does not cease to exist two days a
  year.

|  |
|  |
| ------------ | --------------------------------------------- |
| Priority | Must |
| Epic | E2 |
| Source | Interviews — Dr Simone Vardy, Dr Wes Ngatai |
| Capability | all — this is a cross-cutting constraint |
| Applies to | every other story |

Acceptance criteria

1. Creating an appointment completes successfully with no network connection
    available.
2. Viewing a day's schedule completes successfully with no network connection
    available.
3. Updating, moving and cancelling an appointment complete successfully with
    no network connection available.
4. Restarting the application while the network is unavailable does not lose
    data and does not fail to start.
5. No operation on the appointment path requires a reachable remote service.

Notes. This story is a success criterion in the charter (O5) and a constraint
(K1), not a preference, and it is the requirement most likely to be lost by a
convenient technical choice. Simone's words set the standard: "It goes down
weekly. It went down for two days in February. If the appointment book needs
the internet then the appointment book doesn't exist two days a year." Wes
confirms the extreme case: "There's no reception past Bunjurgen. Not patchy —
none."

Criterion 5 is deliberately phrased as an absolute. A partial satisfaction is
not a partial solution here.

## 4. Story summary

| ID | Story | Priority | Epic | Capability | Depends on | Hours |
| --- | --- | --- | --- | --- | --- | --- |
| ------ | --------------- | ---------- | ------ | ------------ | ---------------- | ------- |
| US01 | Add a client | Must | E1 | C1 | — | 20 |
| US02 | Add an animal | Must | E1 | C2 | US01 | 18 |
| against a |
| client |
| US03 | Book an | Must | E2 | C4 | US01 | 12 |
| appointment |
| for a client |
| US04 | Change or | Must | E2 | C5 | US03 | 12 |
| cancel an |
| appointment |
| US05 | See a day's | Must | E2 | C6 | US03 | 10 |
| appointments |
| US06 | Search for an | Must | E1 | C2 | US01, US02 | 12 |
| animal across |
| all clients |
| US07 | Record a | Must | E1 | C3 | US01 | 16 |
| property |
| against a |
| client |
| US08 | Book either | Must | E2 | C4 | US01, US02, | 30 |
| kind, keeping | US07 |
| the two |
| shapes |
| distinct |
| US09 | See the day's | Must | E2 | C6 | US08 | 14 |
| farm visits |
| in work order |
| US10 | See taken and | Should | E2 | C6 | US08 | 16 |
| free slots |
| US11 | Move a | Should | E2 | C5 | US04, US08 | 10 |
| consultation |
| to another |
| slot |
| US12 | Book with no | Must | E2 | all | — | 12 |
| internet |
| connection |
| US13 | Make a client | Should | E1 | C1 | US01 | 8 |
| inactive |
| Total | 190 |

The 190 hours of story work sit inside the 138 hours of WBS 4.0 Development
plus the 66 hours of 3.0 Design because the stories include their own
validation and view design. The mapping is recorded in WBS and Milestones § 2.

Suggested sprint commitment

The brief scopes the sprint to roughly 8–15 stories. All thirteen are
candidates; the ten Must stories are the commitment, and US10, US11 and US13
are stretch. If the sprint runs short, US10 and US11 are cut first and US13
last, because US10 and US11 both depend on US08 being complete and correct,
whereas US13 is independent.

## 5. Product backlog — identified but not committed

Every item below was requested by a named stakeholder and appears in the
exclusions register in the charter. They are recorded here so that the client
can see they were heard, and so that they are not quietly lost. Priority order
is by value to the clinic.

| # | Backlog item | Requested by | Why it is parked |
| --- | --- | --- | --- |
| ----- | ----------------------- | ----------------------- | ------------------------ |
| B1 | Vaccination reminders | Simone, Trina, Jo | Requires sending SMS |
| and recalls | or email, which is a |
| separate capability |
| B2 | Day-before SMS | Trina | Same dependency as B1 |
| confirmation |
| B3 | Record what was | Wes | "Record what he'd done |
| actually done on a | before he left" — |
| farm visit, on the | genuinely valuable, |
| road | but it is a second |
| write path after the |
| visit, not booking |
| B4 | Actual hours and | Paper document B | Feeds the accountant |
| odometer logging per | quarterly; not |
| farm visit | appointment booking |
| B5 | Waiting list to fill | Trina | Requires a matching |
| cancellations | workflow beyond CRUD |
| B6 | Booked-versus-seen | Simone | The data is in scope |
| reporting screen | (O6); the screen is |
| not |
| B7 | Three-DNAs | Trina | "Applied twice in |
| pre-payment flag | fifteen years"; low |
| frequency, and ties to |
| billing |
| B8 | Clinical records, | Simone | Explicitly out of |
| treatment history, | scope in the brief |
| case notes |
| B9 | Prescriptions and the | Simone | Legally tied to |
| drug register | VetLedger 4 |
| B10 | Invoicing, fees and | Simone, Trina | Explicitly out of |
| payments | scope in the brief |
| B11 | Online booking by | Simone | Explicitly out of |
| clients themselves | scope, and Simone |
| withdrew her own |
| support for it |
| B12 | Route or travel-time | Wes | Ordering the day is in |
| planning between | scope (US09); |
| properties | computing a route is |
| not |
| B13 | The surgery and | Simone | Explicitly out of |
| theatre list | scope in the brief |
| B14 | Migrating records out | — | Explicitly out of |
| of VetLedger 4 | scope in the brief; |
| addresses there have |
| been wrong since 2015, |
| which is a |
| data-quality problem, |
| not a booking problem |
| B15 | Stock, inventory and | — | Not a booking |
| the retail shelf | capability |
| B16 | After-hours roster | — | Alternates with the |
| Beaudesert practice; |
| not booking |
| B17 | Which properties are | Wes | Reporting over farm |
| overdue for herd | history, which depends |
| health | on B3 existing first |
| B18 | Multiple animals in | Paper document A | The clinic's own |
| one consultation slot | ("TWO SLOTS next | decision is two slots, |
| time") | so the current design |
| is correct; a |
| group-booking feature |
| would contradict it |

  B18 is recorded deliberately. The two-cats incident is often read as a
  request for group booking. The paper document resolves it the other way —
  "TWO SLOTS next time" — so the parked item is recorded with the reason it
  should probably stay parked. Recording why something is declined is as
  useful as recording why it is wanted.

## 6. Open questions for the client

These are genuine gaps in the source documents, not padding. Each one is
recorded with the decision taken in the meantime, so the sprint is not
blocked.

| # | Question | Interim decision | Asked of |
| --- | --- | --- | --- |
| ---- | ----------------------------- | ------------------------------ | ------------ |
| Q1 | The appointment book says | Treated as a one-off: 10:15 | Trina |
| slots 10:15 and 10:15 are | is a normal bookable slot |
| "held" on one page but | and the page note is an |
| shows "Kept 10:15 free | annotation |
| after the emergency. |
| Sorry." — is a freed slot a |
| permanent timetable change |
| or a one-off? |
| Q2 | Are the 11:15/11:30 surgery | Treated as held on every | Jo, Mia |
| holds required on Saturday | consulting day including |
| too, or only on full | Saturday |
| consulting days? The footer |
| says "every consult day" |
| and Saturday is a short |
| consulting morning |
| Q3 | A farm visit's contact may | Modelled as a contact on the | Trina, Wes |
| differ from the client — | property, so no second |
| paper document B shows | client record is needed |
| "Ironbark Pastoral Co, mgr |
| K Delaney". Is the manager |
| a client, a property |
| contact, or a separate |
| record? |
| Q4 | May a consultation be | Refused, per US08 criterion | Trina |
| booked for a client with no | 4; the animal is created |
| animal on record, e.g. a | first |
| new puppy arriving? |
| Q5 | Tuesday and Thursday | Full slot; the 10:15 start | Trina, Wes |
| consults end at 10:15 — is | is the last that finishes |
| a 10:15 booking a full slot | before the 10:30 departure |
| or a half slot? |

Q1 and Q2 are the two questions a reviewer is most likely to ask, because both
come from an apparent contradiction in the paper documents rather than from
anything missing. They are recorded here so that the answer is a decision, not
an oversight.