==============================================================================
# REQUEST FOR PROPOSAL — DUNBAR APPOINTMENT SYSTEM (DAS)

| Field | Value |
| --- | --- |
| --------------------- | -------------------------------------------------------- |
| Issued by | Dunbar Veterinary Clinic, 14 High Street, Boonah QLD |
| 4310 |
| On behalf of | Dr Simone Vardy, Principal Veterinarian & Owner |
| Prepared by | Ziyou Li — Business / Requirements Analyst and |
| Procurement Lead |
| Document version | 1.0 |
| Status | For issue to shortlisted vendors |
| Structure | Follows the SCU RFP template, sections 1–10 |
| Companion documents | Project Charter; User Stories US01–US13 with |
| acceptance criteria; WBS and Milestones |

  PLACEHOLDER NOTICE. Two values below are marked [TO CONFIRM] because they
  are not derivable from the project documents and must be supplied by the
  issuer before this RFP is sent: the proposal submission deadline (§ 4) and
  the cost ceiling (§ 7). All other figures in this document are sourced
  from the case study, the three stakeholder interviews or the three paper
  documents, and each is attributed inline.

## 1. Introduction and Background

1.1 The organisation

Dunbar Veterinary Clinic is a mixed-practice veterinary surgery at 14 High
Street, Boonah, in the Scenic Rim about ninety minutes south-west of Brisbane.
It has served the town and the surrounding Fassifern district since 1994. The
practice is owned and run by Dr Simone Vardy, who bought it in 2019 and
carries the commercial risk.

The clinic is small and its workload is split across two distinct rhythms:

| Consulting days | Farm days | Saturday |
| --- | --- | --- |
| -------------- | ---------------------- | ---------------------- | ----------------- |
| Days | Monday, Wednesday, | Tuesday, Thursday | Saturday |
| Friday |
| Hours | 08:30–17:30 | Consults to 10:30, | 08:00–11:00 |
| vets on the road |
| after |
| Rooms | Two consulting rooms | n/a | One |
| Slot length | Fifteen minutes | n/a | Fifteen minutes |
| Last booking | 17:15 | 10:15 | 10:45 |

The clinic is closed Sundays. After-hours cover alternates fortnightly with a
practice at Beaudesert. It holds about 2,400 client records, roughly 3,100
animals and around 180 rural properties. Five people keep it going: the owner,
one associate veterinarian, one Friday locum, two veterinary nurses and a
Saturday nurse. Trina Mahoney has been the practice manager since 2011 and is
the primary user of whatever this project delivers.

1.2 The problem this procurement addresses

All of the clinic's booking work is written into two paper records:

- an A3 spiral appointment book on the front counter, ruled into
    fifteen-minute
lines with a column for each consulting room, and

- a foolscap green diary in which the week's farm work is written.

There is exactly one copy of each. Client and animal records live in VetLedger
4, a program installed in 2008 that handles invoicing and the drug register,
cannot schedule anything, and holds addresses that in some cases have not been
correct since 2015.

The failures are ordinary and are becoming more frequent. All of the following
are recorded in the case study or the interviews:

| Incident | Consequence |
| --- | --- |
| -------------------------------------- | --------------------------------------- |
| Two clients written on the same line | One client was sent home |
| A pregnancy-testing job written into | 120 cows yarded for nobody |
| the wrong week |
| A farm call written into the consult | A client drove 40 km with a lame cow |
| book | on a trailer |
| Thursday's calls worked in the order | 190 km driven in one day; two of the |
| they arrived rather than the order | properties are 4 km apart on the same |
| the roads run | road |
| Nobody can state how many | "Counting would mean going through |
| appointments were booked last month | the book by hand" |
| against how many were seen |
| One slot booked for two cats | Took 25 minutes and put a consulting |
| room out for the morning |

Dr Vardy's own summary: "I can't tell you whether we're flat out in a way that
pays for itself, and that's a bad thing for an owner not to know."

1.3 Commercial context

In May a vendor at a conference quoted Dr Vardy $14,000 per year for a
practice management package. Her assessment: "That's a nurse for four months.
And half of what it does we're not allowed to switch off anyway because of the
drug register." That quotation is the commercial benchmark this procurement is
measured against.

1.4 Purpose of this RFP

Dunbar Veterinary Clinic invites proposals for the design, development,
testing and handover of the Dunbar Appointment System (DAS): one appointment
system that holds both halves of what the practice does, so that whoever
answers the telephone can book the right kind of work in the right place
without deciding which book to open.

This is a procurement of software development services, not of a hosted
product. The clinic is not buying a subscription.

## 2. Scope of Work

2.1 Project description

The system tracks and manages the clinic's client appointments. It is, in
shape, a create/read/update/delete application over a small number of related
records, plus one genuine piece of domain logic. It must be described and
built in terms of capability, not technology.

The single most important requirement in this RFP is that the practice books
two different kinds of work, and they are not the same shape:

| In-clinic consultation | Farm visit |
| --- | --- |
| ------------------------- | ------------------------- | -------------------------- |
| Booked against | One specific animal | A property — not any |
| individual animal |
| Time expressed as | A fixed fifteen-minute | A start time and an |
| slot on the consulting | estimated duration in |
| timetable | hours |
| Duration decided by | Nobody — a consultation | The vet, judged from the |
| is one slot | job; not fixed |
| Room | One of the two | n/a |
| consulting rooms |
| What is treated on the | Known when booked | Not known when the visit |
| day | is booked |

An appointment's kind therefore determines both what it is attached to and how
its time is expressed. The software must hold that honestly rather than
forcing both into one shape with fields left blank.

The six capabilities in scope are:

| Ref | Capability | Content |
| --- | --- | --- |
| ----- | -------------------------- | --------------------------------------------- |
| C1 | Client records | Create, find, update and make inactive a |
| client (a household or a farming business), |
| holding the details needed to identify and |
| contact them |
| C2 | Animals | Each animal recorded individually against a |
| client; list a client's animals; search by |
| animal name across all clients |
| C3 | Properties | Each property recorded against a client |
| with a name and a locality, plus road |
| access and gate notes |
| C4 | Appointments (two kinds) | Consultation and farm visit as defined in |
| the table above |
| C5 | Change and cancel | Move an appointment to another date or |
| time; cancel it; a cancelled appointment |
| remains visible rather than disappearing |
| C6 | Day views | The clinic's day showing taken and free |
| fifteen-minute slots; the day's farm visits |
| listed in the order they are to be worked; |
| a client's appointments listed |

2.2 Deliverables

| # | Deliverable | Acceptance basis |
| --- | --- | --- |
| ---- | ------------------------------------ | ------------------------------------ |
| D1 | Working application implementing | Demonstrated against the user |
| capabilities C1–C6 | stories in Appendix A, as written |
| in the project's Jira board |
| D2 | Source code in the clinic's GitHub | Committed and pushed history; |
| repository, on branches named for | reviewed pull requests |
| the stories |
| D3 | Automated test suite covering the | Runs and passes with a single |
| stories, including at least one | documented command |
| test of each of the two |
| appointment kinds |
| D4 | README sufficient for a person who | Verified by the clinic against a |
| has never seen the project to | clean checkout |
| clone the repository and run the |
| application |
| D5 | Sample configuration file and | No real client data in the |
| sample data using illustrative | repository |
| values only |
| D6 | Handover documentation, six fixed | Section content specified by the |
| sections | project brief |
| D7 | Requirements artefacts: user | Provided by the clinic to the |
| stories with acceptance criteria | vendor; see Appendix A |
| and the exclusions register |

  D7 is supplied by the clinic, not produced by the vendor. The user stories
  US01–US13 and the acceptance criteria already exist and are reproduced in
  Appendix A. Vendors are asked to build to them and to raise any criterion
  they believe is unachievable within the timeline, rather than to
  reinterpret it.

2.3 Explicitly out of scope

Vendors should note that several of the following were actively requested by
clinic staff and have been deliberately excluded. Proposals that include them
without being asked will be marked down on scope discipline (§ 5), not
rewarded for generosity.

| Excluded | Requested by | Reason for exclusion |
| --- | --- | --- |
| ------------------------- | ------------------------- | -------------------------- |
| Clinical records, | Dr Vardy | Separate domain; not |
| treatment histories, | appointment booking |
| case notes |
| Prescriptions and the | Dr Vardy | Legally tied to |
| drug register | VetLedger 4 and cannot |
| be moved |
| Invoicing, fees and | Dr Vardy, Ms Mahoney | Separate domain; |
| payments | VetLedger 4 already does |
| it |
| Vaccination reminders | Dr Vardy, Ms Mahoney, | Requires outbound |
| and recalls | nursing staff | messaging |
| Sending SMS or email, | Ms Mahoney | Same dependency as above |
| including day-before |
| reminders |
| Online booking by | Dr Vardy | Withdrawn by Dr Vardy |
| clients themselves | herself: "I wouldn't |
| trust them to pick the |
| right reason." Also a |
| client-facing security |
| surface |
| Waiting list to fill | Ms Mahoney | Requires a matching |
| cancellations | workflow beyond CRUD |
| Pre-payment flag after | Ms Mahoney | Ties to billing; applied |
| three non-attendances | twice in fifteen years |
| The surgery and theatre | Dr Vardy | Separate domain |
| list |
| Route or travel-time | Dr Ngatai | Ordering the day is in |
| planning between | scope (C6); computing a |
| properties | route is not |
| The after-hours roster | — | Alternates with the |
| Beaudesert practice |
| Stock, inventory and | — | Not a booking capability |
| the retail shelf |
| Migrating any data out | — | Addresses there have |
| of VetLedger 4 | been wrong since 2015; a |
| data-quality problem, |
| not a booking problem |
| A booked-versus-seen | Dr Vardy | The data required to |
| reporting screen | produce the figure is in |
| scope; the screen is not |

Scope boundary statement, to be repeated verbatim in the vendor's own
documentation:

  The system replaces the counter appointment book and the green farm diary.
  It does not replace VetLedger 4, the invoicing, or the drug register.

2.4 Timelines and milestones

The engagement follows the clinic's project plan. Milestones have zero
duration; each is a point at which a defined condition becomes true.

| Ref | Milestone | Condition |
| --- | --- | --- |
| ----- | ----------------------- | ------------------------------------------------ |
| M1 | Project start | Charter approved and baseline set |
| M2 | Requirements approved | Stories US01–US13 reviewed and the exclusions |
| register accepted |
| M3 | Design approved | Data model, slot model, validation rules and |
| day-view design frozen |
| M4 | Development complete | All committed stories implemented and merged |
| through reviewed pull requests |
| M5 | UAT started | Acceptance scripts executing against the |
| stories as written in Jira |
| M6 | UAT complete | Every acceptance criterion on every committed |
| story demonstrated |
| M7 | Go live | Handover documentation complete; the |
| application runs from a clean checkout by |
| following the README alone |
| M8 | Project closure | Retrospective held, backlog groomed and left |
| visible, documents reconciled |

Deployment target: none. The clinic's brief states the handover is the code
plus instructions for running it from a clean checkout. Vendors must not price
hosting, and must not assume a cloud service is available or permitted — see §
3.2 NR-01.

## 3. Technical Requirements

Requirement identifiers are used throughout the evaluation (§ 5) and must be
quoted verbatim in the vendor's compliance matrix.

3.1 Functional requirements

FR-01 — Client records (C1)

| Ref | Requirement | Priority |
| --- | --- | --- |
| --------- | -------------------------------------------------------- | ----------- |
| FR-01.1 | Create a client recording at minimum a name and a | Mandatory |
| contact number |
| FR-01.2 | Find a client by name, returning every match rather | Mandatory |
| than the first |
| FR-01.3 | Update a client's details | Mandatory |
| FR-01.4 | Make a client inactive without deleting their animals, | Mandatory |
| properties or appointments |
| FR-01.5 | An inactive client is excluded from a default search | Mandatory |
| but findable when inactive clients are explicitly |
| included |
| FR-01.6 | A historical appointment belonging to an inactive | Mandatory |
| client still displays that client's name |
| FR-01.7 | Record a second contact number, a postal address, SMS | Desirable |
| consent, and a named alternative person authorised to |
| approve treatment |
| FR-01.8 | A client may have no animals and no property and is | Mandatory |
| still a valid client |

FR-02 — Client search

| Ref | Requirement | Priority |
| --- | --- | --- |
| --------- | -------------------------------------------------------- | ----------- |
| FR-02.1 | Search is case-insensitive and matches on a partial | Mandatory |
| name |
| FR-02.2 | A search matching nothing returns an empty result, not | Mandatory |
| an error |

FR-03 — Animals (C2)

| Ref | Requirement | Priority |
| --- | --- | --- |
| --------- | -------------------------------------------------------- | ----------- |
| FR-03.1 | Create an animal recording at minimum a name and a | Mandatory |
| species, attached to an existing client |
| FR-03.2 | List all animals belonging to one client | Mandatory |
| FR-03.3 | Update and remove an animal | Mandatory |
| FR-03.4 | Record breed, sex and desexed status, age, microchip | Desirable |
| number and insurance details where known |
| FR-03.5 | No field beyond name and species may be mandatory, | Mandatory |
| because the clinic holds incomplete records (one |
| animal's age is recorded as "10 or 11?" and another is |
| "not chipped") |

FR-04 — Animal search across clients

| Ref | Requirement | Priority |
| --- | --- | --- |
| --------- | -------------------------------------------------------- | ----------- |
| FR-04.1 | Search for an animal by name and return matches from | Mandatory |
| every client |
| FR-04.2 | Each result shows the animal's name, its species, and | Mandatory |
| the owner's name and contact number, so the |
| receptionist can confirm without a second lookup |
| FR-04.3 | A name matching several animals returns all of them | Mandatory |
| FR-04.4 | Matching is case-insensitive and matches on a partial | Mandatory |
| name |

  FR-04 exists because the clinic's staff never identify an animal by its
  owner. The practice manager's words: "They never say 'this is Mrs Kelso'.
  They say 'it's Ruby, she's off her food'. I've got fourteen Rubys."

FR-05 — Properties (C3)

| Ref | Requirement | Priority |
| --- | --- | --- |
| --------- | -------------------------------------------------------- | ----------- |
| FR-05.1 | Create a property recording a name and a locality, | Mandatory |
| attached to an existing client |
| FR-05.2 | Record road access and gate or key notes against the | Mandatory |
| property |
| FR-05.3 | List a client's properties | Mandatory |
| FR-05.4 | Update and remove a property | Mandatory |
| FR-05.5 | A client may have animals, properties, both, or | Mandatory |
| neither |
| FR-05.6 | Record a property-level contact distinct from the | Desirable |
| client where they differ |

  FR-05.2 has a named cost attached to its absence. A vet's account:
  "There's a place at Bunjurgen where you go through three gates and the
  third one's got a chain on it and no code and the bloke's never home. I've
  stood there for twenty minutes." FR-05.6 is raised by a paper document,
  where the run sheet shows a property whose contact is a manager rather
  than the client (an incorporated farming business with a named manager and
  a separate telephone number).

FR-06 — Consultation booking (C4)

| Ref | Requirement | Priority |
| --- | --- | --- |
| --------- | -------------------------------------------------------- | ----------- |
| FR-06.1 | Book a consultation selecting one animal, a date, a | Mandatory |
| fifteen-minute slot, and one of the two consulting |
| rooms |
| FR-06.2 | A consultation's duration is one slot and is not a | Mandatory |
| settable field |
| FR-06.3 | Refuse a consultation with no animal, naming the | Mandatory |
| missing animal in the message |
| FR-06.4 | Refuse a consultation whose time does not exist on | Mandatory |
| that day's consulting timetable |
| FR-06.5 | Enforce the weekly timetable: Mon/Wed/Fri 08:30–17:15, | Mandatory |
| Tue/Thu consults to 10:15 only, Sat 08:00–11:00, |
| closed Sunday |
| FR-06.6 | Refuse a booking in the slots held for surgery | Mandatory |
| drop-offs (11:15 and 11:30 on a consulting day) |
| FR-06.7 | Refuse a booking that would place two consultations in | Mandatory |
| the same room in the same slot |
| FR-06.8 | Record the reason for the visit | Mandatory |

  FR-06.5 and FR-06.6 are not optional polish. The clinic's appointment book
  footer states: "11:15 AND 11:30 HELD FOR SURGERY DROP-OFFS EVERY CONSULT
  DAY — DO NOT FILL." A naive implementation makes every slot in the
  timetable bookable and therefore fails FR-06.6. FR-06.7 is not
  theoretical. On the recorded day, one slot was booked for two cats; it
  took 25 minutes and put a consulting room out for the morning. The
  clinic's own resolution is written on the page: "TWO SLOTS next time."

FR-07 — Farm visit booking (C4)

| Ref | Requirement | Priority |
| --- | --- | --- |
| --------- | -------------------------------------------------------- | ----------- |
| FR-07.1 | Book a farm visit selecting a property — not an animal | Mandatory |
| — plus a start time and an estimated duration in hours |
| FR-07.2 | The estimated duration is entered by the user, is | Mandatory |
| editable, and is not constrained to a slot |
| FR-07.3 | Refuse a farm visit with no property, naming the | Mandatory |
| missing property in the message |
| FR-07.4 | Record the reason for the visit, and where given the | Mandatory |
| job type, the head count and the client or property |
| contact |
| FR-07.5 | Farm visits are not placed into the fifteen-minute | Mandatory |
| slot grid |
| FR-07.6 | Record the actual hours worked separately from the | Desirable |
| estimate, and never overwrite the estimate with the |
| actual |
| FR-07.7 | Record an odometer reading at the start and finish of | Optional |
| a farm day |

  FR-07.6 is derived from the clinic's own run sheet, which records both an
  estimate ("Est. 3.0 hr") and an actual ("11:20–14:35 (3.25)") and
  instructs: "WRITE THE ACTUAL HOURS, NOT THE ESTIMATE." Two values that
  must both survive imply two fields.

FR-08 — Change and cancellation (C5)

| Ref | Requirement | Priority |
| --- | --- | --- |
| --------- | -------------------------------------------------------- | ----------- |
| FR-08.1 | Move an appointment to a different date or time | Mandatory |
| FR-08.2 | Cancel an appointment | Mandatory |
| FR-08.3 | A cancelled appointment remains visible in the record | Mandatory |
| rather than disappearing |
| FR-08.4 | Changing one appointment does not affect any other | Mandatory |
| appointment |
| FR-08.5 | Refuse a move into a slot that is already taken, | Mandatory |
| naming the conflicting appointment |
| FR-08.6 | Refuse a move into a slot that does not exist on that | Mandatory |
| day's timetable |
| FR-08.7 | After a move, the appointment's previous slot becomes | Mandatory |
| free |
| FR-08.8 | A move preserves the appointment's animal, client and | Mandatory |
| reason |

  FR-08.3 is an explicit instruction not to hard-delete, and is the
  criterion most likely to be failed by a default CRUD implementation.
  FR-08.7 comes directly from a recorded day: a recheck was moved from 09:00
  to 09:30, an emergency took the freed 09:00 slot, and the practice manager
  then deliberately left 10:15 empty and apologised for it in writing on the
  page. That three-step sequence is the clinic's real workflow and it does
  not work unless a move releases the old slot.

FR-09 — Day views (C6)

| Ref | Requirement | Priority |
| --- | --- | --- |
| ---------- | ------------------------------------------------------- | ----------- |
| FR-09.1 | List a day's appointments in time order with enough | Mandatory |
| detail to know what each one is |
| FR-09.2 | A day with nothing booked returns an empty schedule | Mandatory |
| rather than an error |
| FR-09.3 | Cancelled appointments are distinguishable from live | Mandatory |
| ones in the listing |
| FR-09.4 | Display the day as a grid: one row per fifteen-minute | Mandatory |
| slot, one column per consulting room |
| FR-09.5 | A taken slot shows client surname, animal name, | Mandatory |
| reason and contact number |
| FR-09.6 | A free slot is visually distinguishable from a taken | Mandatory |
| one |
| FR-09.7 | A held surgery slot is visually distinguishable from | Mandatory |
| both a free slot and a booked one, so it is not |
| offered as available |
| FR-09.8 | On a Tuesday or Thursday the grid ends at 10:15; on | Mandatory |
| Saturday it starts at 08:00 and ends at 11:00 |
| FR-09.9 | List a day's farm visits separately from | Mandatory |
| consultations, in the order they will be worked, and |
| allow that order to be changed |
| FR-09.10 | Each farm visit entry shows property name, locality, | Mandatory |
| client or contact, job, head count where given, |
| estimated duration and access notes |
| FR-09.11 | Reordering the day's visits does not silently rewrite | Mandatory |
| any visit's start time |
| FR-09.12 | List a client's appointments | Mandatory |

  FR-09.4 and FR-09.5 are the specification for adoption, and they are not
  the vendor's design choice to make. The practice manager's binding
  instruction is: "Just make it look like the book. People trust the book. I
  trust the book." The layout means time down the side and a column per
  room. The detail level is defined by the book's own line format: client
  surname, animal name in quotation marks, the reason, and the contact
  number. FR-09.7 requires a third visual state for slots that are neither
  free nor booked. Treating held slots as "free" would permit a booking that
  FR-06.6 forbids; treating them as "taken" would misrepresent the day to
  the vet.

3.2 Non-functional requirements

NR-01 — Offline operation (the highest-weighted non-functional requirement)

| Ref | Requirement | Priority |
| --- | --- | --- |
| --------- | -------------------------------------------------------- | ----------- |
| NR-01.1 | All create, read, update, move and cancel operations | Mandatory |
| on the appointment path complete with no network |
| connection available |
| NR-01.2 | No operation on the appointment path requires a | Mandatory |
| reachable remote service |
| NR-01.3 | Data is held locally and survives restarting the | Mandatory |
| application while the network is unavailable |
| NR-01.4 | The application starts successfully on a machine with | Mandatory |
| no network connection |

  This is a success criterion and a feasibility constraint, not a feature.
  The owner's requirement: "It goes down weekly. It went down for two days
  in February. If the appointment book needs the internet then the
  appointment book doesn't exist two days a year." The associate's, for the
  road: "There's no reception past Bunjurgen. Not patchy — none." A proposal
  that depends on a hosted database, a cloud API reachable only over the
  internet, or an externally authenticated login fails NR-01 and is
  non-compliant, regardless of how well it scores elsewhere. Vendors who
  believe a hosted component is unavoidable must say so in a written
  clarification before the deadline.

NR-02 — Local data storage

| Ref | Requirement | Priority |
| --- | --- | --- |
| --------- | -------------------------------------------------------- | ----------- |
| NR-02.1 | Persistent storage that requires no separately | Mandatory |
| installed database server |
| NR-02.2 | Data files stored under a documented, configurable | Mandatory |
| path |
| NR-02.3 | The whole dataset is recoverable by copying a | Desirable |
| documented set of files |
| NR-02.4 | Schema changes are applied by a versioned, | Desirable |
| forward-only migration mechanism |

NR-03 — Testability

| Ref | Requirement | Priority |
| --- | --- | --- |
| --------- | -------------------------------------------------------- | ----------- |
| NR-03.1 | An automated test suite runs with a single documented | Mandatory |
| command |
| NR-03.2 | The suite includes at least one test of each of the | Mandatory |
| two appointment kinds |
| NR-03.3 | The suite includes tests proving each invalid | Mandatory |
| combination is refused: a consultation with no animal, |
| a farm visit with no property, a consultation off the |
| timetable, and a booking in a held slot |
| NR-03.4 | Tests run without a network connection | Mandatory |
| NR-03.5 | A cancelled appointment is still present after a | Mandatory |
| restart, asserted by a test |

  NR-03.2 is quoted from the project's fixed Definition of Done, which
  states that automated tests must exist "including at least one test of the
  clinic's two kinds of appointment where the story touches them".

NR-04 — Usability and adoption

| Ref | Requirement | Priority |
| --- | --- | --- |
| --------- | -------------------------------------------------------- | ----------- |
| NR-04.1 | A user who has used the paper book can find the day's | Mandatory |
| schedule without training |
| NR-04.2 | The day view mirrors the book's layout: time down the | Mandatory |
| side, a column per room |
| NR-04.3 | Booking a consultation takes no more steps than | Desirable |
| writing a line in the book |
| NR-04.4 | The application is usable on the clinic's existing | Mandatory |
| front-counter hardware; vendors must state any assumed |
| screen size or input device |
| NR-04.5 | An emergency booking can be made without first | Desirable |
| cancelling another appointment |

  NR-04.4 matters because the clinic has no IT department and the front
  counter holds what it holds. A vendor assuming a large high-resolution
  display or a touch screen must say so, so the clinic can price the
  hardware. NR-04.5 reflects the book's own rule: "EMERGENCIES GO IN
  WHEREVER THERE IS ROOM — MARK 'EMERG' AND TELL THE NURSE."

NR-05 — Security and privacy

| Ref | Requirement | Priority |
| --- | --- | --- |
| --------- | -------------------------------------------------------- | ----------- |
| NR-05.1 | Client names, addresses and telephone numbers are | Mandatory |
| stored so that they are not readable by an unrelated |
| person with access to the machine |
| NR-05.2 | The repository contains no real client data; sample | Mandatory |
| data uses illustrative values only |
| NR-05.3 | No credential, API key or secret is committed to the | Mandatory |
| repository |
| NR-05.4 | Any configuration the application needs is supplied | Mandatory |
| through a documented file with illustrative sample |
| values |
| NR-05.5 | Access to the application is controlled by a | Desirable |
| documented mechanism appropriate to a single-clinic |
| deployment |

  The owner's requirement: "It has to be secure — client names, addresses,
  phone numbers, and some of these people are not keen on being findable."
  NR-05.2 and NR-05.3 are additionally conditions of the project's fixed
  Definition of Done and of the clinic's own risk register.

NR-06 — Maintainability and handover

| Ref | Requirement | Priority |
| --- | --- | --- |
| --------- | -------------------------------------------------------- | ----------- |
| NR-06.1 | A person who has never seen the project can clone the | Mandatory |
| repository and run the application by following the |
| README alone |
| NR-06.2 | No file exists only on one team member's machine | Mandatory |
| NR-06.3 | Source is committed on branches named for the story | Mandatory |
| they implement |
| NR-06.4 | Work is reviewed by a second person through a pull | Mandatory |
| request before merging |
| NR-06.5 | Known issues and limitations are documented, including | Mandatory |
| assumptions that would break if the clinic changed how |
| it books either kind of work |
| NR-06.6 | The five to ten highest-value next items are | Mandatory |
| documented in priority order for a following team |

  NR-06.1, NR-06.3 and NR-06.4 are quoted from the Definition of Done.
  NR-06.1 is verified by the clinic performing the clone, not by the vendor
  asserting it.

NR-07 — Performance and capacity

| Ref | Requirement | Priority |
| --- | --- | --- |
| --------- | -------------------------------------------------------- | ----------- |
| NR-07.1 | Saving an appointment completes in under two seconds | Mandatory |
| on the clinic's hardware |
| NR-07.2 | Displaying a day view completes in under two seconds | Mandatory |
| NR-07.3 | The application handles the clinic's stated scale | Mandatory |
| without degradation: about 2,400 clients, 3,100 |
| animals, 180 properties |
| NR-07.4 | Searching for an animal by name returns within two | Mandatory |
| seconds at that scale |
| NR-07.5 | The application remains usable with at least two users | Mandatory |
| on the schedule simultaneously |

  NR-07.5 addresses a specific failure of the current arrangement: "There's
  one of it. If I'm on the phone and Jo's on the phone, one of us is holding
  the book and the other one is guessing."

3.3 Integration requirements

| Ref | Requirement | Priority |
| --- | --- | --- |
| ------- | ---------------------------------------------------------- | ----------- |
| IR-01 | No integration with VetLedger 4 is required or | Mandatory |
| permitted. The system does not replace, read from or |
| write to it |
| IR-02 | No integration with any third-party service that | Mandatory |
| requires internet access |
| IR-03 | Where an import is provided, it accepts CSV or another | Desirable |
| documented plain-text format that the clinic can produce |
| by hand |
| IR-04 | Vendor must state, in the proposal, every external | Mandatory |
| dependency the solution introduces, with its licence |

  IR-01 is the scope boundary in integration form. IR-04 exists because the
  clinic has no capability to maintain a dependency tree, and a vendor that
  does not declare its dependencies leaves the clinic unable to assess what
  it is accepting.

## 4. Proposal Guidelines

4.1 Submission instructions

| Item | Requirement |
| --- | --- |
| ------------------------- | ---------------------------------------------------- |
| Submission method | By email to the contact in § 9, with the subject |
| line RFP — Dunbar Appointment System — <Vendor |
| name> |
| Acknowledgement | The clinic will acknowledge receipt within two |
| business days |
| Clarification questions | By email to the same address, before the questions |
| deadline in § 9 |
| Consolidated answers | The clinic will circulate all questions and |
| answers to every vendor who has registered an |
| intention to respond, so that no vendor gains an |
| information advantage |
| Withdrawal | A proposal may be withdrawn in writing at any time |
| before the deadline |

4.2 Required format

| Element | Requirement |
| --- | --- |
| ---------------------- | ------------------------------------------------------- |
| File format | PDF, single file per document |
| Structure | Sections numbered to match this RFP, 1 to 10, so that |
| the evaluation can be performed section by section |
| Compliance matrix | Mandatory. Every requirement in § 3 reproduced by its |
| identifier with one of: Compliant, Partially |
| compliant, Not compliant, plus a one-line |
| justification for anything other than Compliant |
| Length | Technical proposal no more than 20 pages excluding |
| the compliance matrix and CVs |
| Cost proposal | Separate PDF section, as specified in § 7 |
| Currency | Australian dollars, including GST |
| Validity | The proposal must remain valid for 90 days from the |
| submission deadline |
| Language | English |
| Unstated assumptions | Any assumption made in the proposal must be listed |
| explicitly in a dedicated section. An unstated |
| assumption is treated as a risk to the clinic and is |
| scored against the vendor under § 5 criterion 2 |

4.3 Deadline

|  |
|  |
| ---------------------------------- | ------------------------------------------- |
| Proposal submission deadline | [TO CONFIRM] — to be set by the issuer |
| Time zone | Australian Eastern Standard / Daylight |
| Time (AEST/AEDT) as applicable |
| Late proposals | Late submissions will not be evaluated, |
| because the milestone chain (M2 → M3) |
| cannot absorb slippage |
| Clarification questions deadline | [TO CONFIRM] — recommended as five |
| business days before the submission |
| deadline |
| Expected award date | [TO CONFIRM] — recommended as within ten |
| business days of the deadline |

  Why this is left as a placeholder rather than filled in. The deadline is a
  business decision with a real consequence — it fixes when M3 and the
  sprint can start — and inventing a date would place a fabricated
  commitment in a document that is issued to suppliers. The issuer must set
  it.

## 5. Evaluation Criteria

5.1 Selection process

| Stage | Activity | Outcome |
| --- | --- | --- |
| ------- | ---------------------------------- | ----------------------------------- |
| 1 | Mandatory compliance screen | Any proposal that does not meet |
| every requirement marked |
| Mandatory in § 3 in full is |
| excluded from scoring. This |
| screen exists so that a strong |
| commercial offer cannot |
| compensate for a missing |
| capability |
| 2 | Offline-operation test | Each surviving proposal is |
| assessed against NR-01. A |
| solution requiring a reachable |
| remote service for the |
| appointment path is non-compliant |
| and is excluded |
| 3 | Weighted technical and | The five criteria in § 5.2 are |
| commercial scoring | scored 1–5 by the evaluation |
| panel |
| 4 | Reference checks | At least one reference per |
| shortlisted vendor is contacted |
| 5 | Clarification and negotiation | Shortlisted vendors may be asked |
| to clarify scope, assumptions or |
| pricing |
| 6 | Award recommendation | Highest weighted total, subject |
| to the tie-break rule in § 5.5 |

The panel is Dr Vardy (owner and approver), Ms Mahoney (practice manager and
principal user) and the requirements analyst who prepared this RFP. Neither Ms
Mahoney nor the analyst has any relationship with any vendor under
consideration, and no panel member may score a vendor they have worked with.

5.2 Criteria and weighting

| # | Criterion | Weight | What is being scored |
| --- | --- | --- | --- |
| --- | -------------------------------- | -------- | -------------------------------- |
| 1 | Proposal completeness and | 30 % | Whether the proposal |
| requirements understanding | demonstrates a correct |
| understanding of the two |
| appointment kinds, the |
| timetable rules, the held |
| slots, the offline constraint, |
| and the scope boundary. |
| Whether the compliance matrix |
| is complete and honest |
| 2 | Technical approach and | 25 % | Whether the architecture |
| solution quality | satisfies NR-01 offline |
| operation, NR-02 local |
| storage, NR-03 testability and |
| NR-07 performance. Whether the |
| data model represents the two |
| appointment kinds honestly |
| rather than with nullable |
| fields |
| 3 | Team experience and | 15 % | Relevant experience of |
| qualifications | comparable |
| CRUD-plus-domain-logic |
| systems, local or |
| offline-first desktop |
| applications, and small-clinic |
| or practice-management |
| settings. Named individuals |
| and their roles |
| 4 | Project plan and timeline | 15 % | Whether the plan maps to |
| milestones M1–M8, identifies |
| dependencies correctly, states |
| a realistic effort estimate, |
| and demonstrates how the |
| Definition of Done will be met |
| per story |
| 5 | Cost | 15 % | Total cost against the |
| breakdown in § 7, its internal |
| consistency, and value against |
| the $14,000-per-year benchmark |
| in § 1.3 |

Why criterion 1 carries the heaviest weight. This project's documented
failures are all decisions about what kind of thing is being booked — a farm
call written into the consult book, two animals in one slot, an emergency with
nowhere to go. A vendor that has not understood the two shapes will build
something that passes a demonstration and fails on the first difficult
Tuesday. Understanding is therefore worth more than technical elegance here,
and the compliant-matrix requirement in § 4.2 is how it is made observable.

Why cost is only 15 %. The clinic's real cost problem is the $14,000-per-year
subscription, and every proposal under this RFP is expected to be a one-off
development cost. Price differences between credible vendors are therefore
much smaller than the difference between any of them and the subscription
alternative, so price is a check rather than the deciding factor.

5.3 Scoring scale

Each criterion is scored on a five-point scale. The bands are defined so that
two evaluators converge on the same number, which is the whole purpose of
publishing a scale.

| Score | Meaning |
| --- | --- |
| ------- | ---------------------------------------------------------------------- |
| 5 | Fully meets the requirement and demonstrates understanding beyond it |
| — for example, anticipates a consequence the clinic did not state |
| 4 | Fully meets the requirement |
| 3 | Meets the requirement with a stated limitation, or requires |
| additional work by the clinic |
| 2 | Partially meets the requirement; a workaround would be needed |
| 1 | Does not meet the requirement |
| 0 | Fails a mandatory requirement → excluded at stage 1 or 2 |

Worked example. On criterion 2, a proposal that implements the two appointment
kinds as one table with nullable animal and property columns scores 1 or 2,
because it does not meet FR-06.3 and FR-07.3 in spirit even though it may
reject the empty cases with validation. A proposal that models them as
distinct types and additionally notes that held surgery slots need a third
display state scores 5.

5.4 Weighted total

$$\text{Total} = \sum_{i=1}^{5} \left( \text{score}_i \times \text{weight}_i
\right)$$

where scores are 0–5 and weights are 0.30, 0.25, 0.15, 0.15, 0.15. The maximum
attainable total is therefore 5.00.

5.5 Tie-break rule

If two proposals produce the same weighted total to two decimal places, the
following are applied in order:

1. Higher score on criterion 1 (proposal completeness and requirements
    understanding).
2. Higher score on criterion 2 (technical approach).
3. Lower total cost.
4. Written recommendation of the practice manager, on the grounds that she is
    the
primary daily user and adoption is the single largest operational risk
recorded in the project charter.

5.6 Conditions of the award

The successful vendor must accept the following, which are restated in § 8:

- The Definition of Done is fixed and is not open to amendment. Every story
ships with tests, a reviewed pull request, and a README that works from a
clean checkout.

- Scope is fixed at § 2.1 and § 2.3. Additional capability is a change
    request,
priced and scheduled separately, and is not a reason to vary the award price.

- The clinic will verify NR-06.1 itself by cloning the repository to a machine
that has never seen the project and following only the README.

## 6. Vendor Information

6.1 Company overview — information required from vendors

| # | Required |
| --- | --- |
| --- | -------------------------------------------------------------------------- |
| 1 | Legal entity name, ABN, registered address, and year established |
| 2 | Number of staff, and the number who would work on this engagement |
| 3 | Whether the vendor carries professional indemnity and public liability |
| insurance, with policy types |
| 4 | Any conflict of interest, or a written statement that there is none |
| 5 | Whether the vendor is or has been a supplier to any competitor of the |
| clinic. (Low likelihood in a rural veterinary market; included because a |
| supplier relationship with a neighbouring practice would be material to |
| confidentiality) |

6.2 Experience and qualifications

| # | Required |
| --- | --- |
| --- | -------------------------------------------------------------------------- |
| 1 | Two comparable projects delivered in the last three years, with the |
| client named and contactable |
| 2 | Evidence of at least one project delivered offline-first or as a local |
| desktop application with no server dependency |
| 3 | Evidence of at least one project in which the vendor built to |
| customer-supplied user stories and acceptance criteria rather than |
| deriving its own requirements |
| 4 | Names, roles and relevant experience of the individuals who would do the |
| work, not only the individuals who would sell it |
| 5 | The vendor's standard approach to automated testing, and the test |
| coverage it would expect to deliver against NR-03 |

  Requirement 3 is included deliberately. The clinic already holds US01–US13
  with acceptance criteria (Appendix A) and needs a vendor that will build
  to them and argue with a criterion it believes is wrong, not one that will
  quietly rewrite it.

6.3 References

| # | Required |
| --- | --- |
| --- | -------------------------------------------------------------------------- |
| 1 | Two referees, with organisation, contact name, contact details and the |
| nature of the work |
| 2 | Permission for the clinic to contact them |
| 3 | For each reference, the delivered scope, the final cost against the |
| original quotation, and whether the delivery date was met |

  Item 3 is asked because the most useful information from a reference is
  not whether the client was satisfied but whether the quoted price and date
  held. Vendors who decline to provide it should say so in the proposal and
  will be scored accordingly under criterion 3.

## 7. Cost Proposal

7.1 Pricing structure — what vendors must provide

Vendors must price the work in the three categories below, and must not bundle
them into a single figure, because the clinic needs to see where the cost sits
and compare like with like across proposals.

| Category | Content | Basis of pricing |
| --- | --- | --- |
| ------------------------- | ------------------------- | -------------------------- |
| A — Development | Requirements | Fixed price, or a rate |
| confirmation, design, | card with an estimated |
| implementation of | hour count. If a rate |
| C1–C6, and the | card is offered, the |
| automated test suite | estimate must be |
| (D1, D3) | included |
| B — Documentation | README and run | Fixed price |
| instructions (D4), |
| sample configuration |
| and data (D5), handover |
| documentation (D6), and |
| known-issues register |
| C — Delivery and | Repository transfer, a | Fixed price |
| handover | handover session with |
| clinic staff, and |
| support during the |
| clinic's own |
| clean-checkout |
| verification |

| # | Required in the cost proposal |
| --- | --- |
| --- | -------------------------------------------------------------------------- |
| 1 | A total for each of A, B and C, and a grand total |
| 2 | The estimated hours behind each category and the implied hourly rate |
| 3 | All amounts in AUD including GST |
| 4 | Any recurring cost, stated explicitly, with the period. The clinic |
| expects recurring cost to be zero and will treat any recurring charge as |
| a material deviation requiring justification |
| 5 | All third-party licence fees the solution requires, with the licence |
| type and whether it is per-machine, per-user or perpetual. The clinic |
| must not be left holding an undisclosed licence obligation |
| 6 | Hardware or operating-system prerequisites, priced separately and |
| clearly marked as not included in the totals |
| 7 | The cost of a single round of post-handover defect correction, and the |
| period during which it is available |
| 8 | Assumptions and exclusions that affect price |

  Item 4 and item 5 exist because of the procurement's commercial context:
  the clinic was quoted $14,000 per year and the owner's objection was as
  much about the recurring shape of the cost as the amount. A proposal whose
  total is low but which introduces a per-machine licence is not lower cost.

7.2 Payment terms

| Milestone | Payment | Condition |
| --- | --- | --- |
| ---------------------- | ------------------------- | ----------------------------- |
| M3 — Design approved | 30 % of the grand total | Design accepted by the |
| clinic |
| M6 — UAT complete | 50 % of the grand total | Every acceptance criterion |
| on every committed story |
| demonstrated |
| M7 — Go live | 20 % of the grand total | The clinic has cloned the |
| repository to a clean |
| machine and run the |
| application by following |
| the README alone |

| # | Term |
| --- | --- |
| --- | -------------------------------------------------------------------------- |
| 1 | Two payment stages are the minimum, and the clinic will not pay more |
| than 30 % before a design is accepted |
| 2 | The final 20 % is retained until the clinic's own clean-checkout |
| verification succeeds. This is deliberate: NR-06.1 is the condition most |
| often claimed and least often true |
| 3 | Invoices are payable 30 days from receipt of a correctly rendered |
| invoice |
| 4 | All amounts are inclusive of GST, and a valid tax invoice is required |
| 5 | No payment is made for work outside the scope in § 2.1 without a |
| written, agreed change request |
| 6 | If the engagement is terminated before M6, payment is pro rata against |
| demonstrated progress, assessed against the milestones already met, and |
| the clinic retains all work product produced to that point |

## 8. Terms and Conditions

8.1 Contract terms

| # | Term |
| --- | --- |
| ---- | ------------------------------------------------------------------------- |
| 1 | Scope. Fixed at § 2.1 and § 2.3. Any additional capability is a change |
| request, priced and scheduled separately |
| 2 | Acceptance. Acceptance is demonstrated against the user stories in |
| Appendix A as written in the project's Jira board. A story is not |
| accepted until every one of its acceptance criteria is demonstrated |
| 3 | Definition of Done. The seven-item Definition of Done is fixed and is |
| not open to amendment. It includes: code committed and pushed on a |
| branch named for the story; every acceptance criterion met and |
| demonstrated; review by a second person through a pull request with |
| comments addressed; automated tests including at least one test of the |
| two appointment kinds; the application running from a clean checkout by |
| following the README alone; no known critical defects; and the Jira |
| issue and the decision record updated |
| 4 | Critical defects. A defect is critical if it loses an appointment, |
| attaches a booking to the wrong kind of record, or stops the |
| application starting. No critical defect may be open at acceptance |
| 5 | Intellectual property. All source code, documentation and test |
| artefacts produced under this engagement become the property of Dunbar |
| Veterinary Clinic on final payment. The vendor retains no right to |
| reuse clinic data |
| 6 | Confidentiality. The vendor will not disclose client names, addresses |
| or telephone numbers, and will not retain any clinic data after |
| handover |
| 7 | Data. The vendor must not place real client data in the repository. |
| Sample and test data uses illustrative values only |
| 8 | Warranty. The vendor warrants that the delivered software is its own |
| work, or that all third-party components are properly licensed and |
| disclosed under § 7.1 item 5 |
| 9 | Support. The scope and duration of post-handover support must be stated |
| in the proposal, with the cost under § 7.1 item 7 |
| 10 | Termination. The clinic may terminate for material breach, or for |
| convenience with 14 days' written notice, with payment pro rata per § |
| 7.2 item 6 |
| 11 | Governing law. Queensland, Australia |

8.2 Legal and regulatory requirements

| # | Requirement |
| --- | --- |
| --- | -------------------------------------------------------------------------- |
| 1 | Privacy. The vendor must handle client names, addresses and telephone |
| numbers consistently with the Privacy Act 1988 (Cth) and the Australian |
| Privacy Principles. The clinic's own concern is recorded in NR-05.1: |
| "some of these people are not keen on being findable." |
| 2 | Animal medicines and the drug register. The vendor must not attempt to |
| move, replace or integrate with the drug register. It is regulated and |
| stays in VetLedger 4. This is a condition of IR-01 |
| 3 | Records retention. The system must not destroy appointment history. A |
| cancelled appointment remains visible (FR-08.3), which is also a |
| records-retention requirement rather than a display preference |
| 4 | Accessibility. While no formal standard is imposed, the clinic asks that |
| the application be usable by staff with ordinary office computing |
| skills, and that text be legible at the front counter's working distance |
| 5 | Work health and safety. No on-site work is expected. If the vendor |
| requires site access, the clinic's WHS induction applies and must be |
| arranged in advance |

## 9. Additional Information

9.1 Q&A sessions and briefings

| Activity | Arrangement |
| --- | --- |
| ------------------------------- | ---------------------------------------------- |
| Vendor briefing | A single 60-minute online briefing, at which |
| the clinic will walk through the two |
| appointment kinds, the timetable rules and |
| the paper documents. Attendance is optional |
| but strongly recommended |
| One-to-one clarification | Vendors may request a 30-minute one-to-one |
| session. The clinic will offer the same |
| opportunity to every vendor that requests it |
| Written questions | Submitted by email; all questions and |
| answers are circulated to every registered |
| vendor so that no vendor gains an |
| information advantage |
| Site visit | Not offered. The clinic is an operating |
| veterinary surgery and cannot host vendor |
| visits during consulting hours |
| Materials provided to vendors | The case study, the three paper documents |
| (anonymised), the user story set (Appendix |
| A) and the exclusions register. The paper |
| documents contain illustrative client |
| details only |

9.2 Contact information

|  |
|  |
| ------------------------------------- | ---------------------------------------- |
| Procurement contact | Ziyou Li, Business / Requirements |
| Analyst and Procurement Lead |
| Email | z.li.89@student.scu.edu.au |
| Subject line for all correspondence | RFP — Dunbar Appointment System — |
| <Vendor name> |
| Response time | The clinic will acknowledge within two |
| business days |
| Client-side escalation | Dr Simone Vardy, Principal |
| Veterinarian & Owner, Dunbar |
| Veterinary Clinic, 14 High Street, |
| Boonah QLD 4310 · (07) 5463 1180 |

  The client-side telephone number is the clinic's published number and is
  given for escalation only. Vendors must not telephone the clinic's front
  counter about this RFP, because that line is the single point of failure
  this procurement exists to relieve.

## 10. Appendices

10.1 Supporting documents

| Ref | Document | Purpose |
| --- | --- | --- |
| ----- | ----------------------------------- | ------------------------------------ |
| A | User stories US01–US13 with | The acceptance basis for |
| acceptance criteria | deliverable D1 and the source of |
| the Definition of Done's |
| story-level conditions |
| B | Exclusions register | The out-of-scope list in § 2.3, |
| with the requester and reason for |
| each item |
| C | Paper document extracts — | The field-level source of FR-03, |
| appointment book day page, farm | FR-05, FR-06, FR-07 and FR-09. All |
| run sheet, new client | client details are illustrative |
| registration form |
| D | Repository and branch conventions | The branch-naming and pull-request |
| requirements in NR-06.3 and |
| NR-06.4 |
| E | Test results | Produced by the vendor at M6: the |
| suite output, the acceptance |
| criteria covered, and the criteria |
| not covered with reasons |

Appendix A is supplied to vendors in full and is not to be rewritten. It is
reproduced from User Stories US01-US13 in the clinic's own project
documentation.

10.2 Glossary

| Term | Definition |
| --- | --- |
| ---------------------- | ------------------------------------------------------- |
| Animal | An individual animal recorded against a client. |
| Identified by name and species at minimum |
| Appointment | A booked piece of clinic work. There are two kinds: a |
| consultation and a farm visit. The kind determines |
| what the appointment is attached to and how its time |
| is expressed |
| Client | A household or a farming business. The party the |
| clinic invoices and contacts |
| Consultation | An in-clinic appointment for one animal, in a fixed |
| fifteen-minute slot, in one of two consulting rooms. |
| Its length is not a settable value |
| Consulting day | Monday, Wednesday or Friday. Consults 08:30–17:30 |
| with a last booking at 17:15 |
| Consulting timetable | The weekly pattern of consulting days, hours and slot |
| length, including the short Tuesday/Thursday consult |
| window and the Saturday morning |
| C (capability ref) | A capability in scope, C1–C6, defined in § 2.1 |
| D (deliverable ref) | A deliverable, D1–D7, defined in § 2.2 |
| Definition of Done | The fixed seven-item checklist a user story must |
| satisfy before it is considered complete. It cannot |
| be amended |
| Farm day | Tuesday or Thursday. Consults end at 10:15; the vets |
| are on the road from 10:30 |
| Farm visit | An appointment booked against a property, with a |
| start time and an estimated duration in hours. Not a |
| slot and not fixed. What is treated on the day is not |
| known when the visit is booked |
| FR-xx | A functional requirement in § 3.1 |
| Held slot | 11:15 and 11:30 on every consulting day, reserved for |
| surgery drop-offs and not bookable for a consultation |
| IR-xx | An integration requirement in § 3.3 |
| Inactive client | A client retained in the records but excluded from |
| default searches. Clients are made inactive rather |
| than deleted, so that history remains intact |
| M (milestone ref) | A milestone, M1–M8, defined in § 2.4 |
| NR-xx | A non-functional requirement in § 3.2 |
| Property | A named place with a locality, recorded against a |
| client. A farm visit is booked against a property. It |
| carries road access and gate notes |
| Run sheet | The vet's ordered list of a day's farm visits. |
| Ordering is in scope; route computation is not |
| Slot | One fifteen-minute position in a consulting room's |
| day. A consultation occupies exactly one |
| Story / user story | A requirement expressed as a role, a want and a |
| reason, with acceptance criteria. US01–US13 |
| UAT | User acceptance testing, performed against the |
| stories as written in Jira |
| VetLedger 4 | The clinic's existing invoicing and drug-register |
| program, installed in 2008. It cannot schedule. It is |
| not replaced by this project |

10.3 Appendix A — User stories US01–US13

The full text of Appendix A, with every acceptance criterion, is maintained in
the clinic's requirements document and issued with this RFP. The summary below
is for reference only; the issued document governs.

| ID | Story | Priority | Epic |
| --- | --- | --- | --- |
| ------ | ----------------------------------------------------- | ---------- | ------ |
| US01 | Add a client | Must | E1 |
| US02 | Add an animal against a client | Must | E1 |
| US03 | Book an appointment for a client | Must | E2 |
| US04 | Change or cancel an appointment | Must | E2 |
| US05 | See a day's appointments | Must | E2 |
| US06 | Search for an animal across all clients | Must | E1 |
| US07 | Record a property against a client | Must | E1 |
| US08 | Book either kind of appointment, keeping the two | Must | E2 |
| shapes distinct |
| US09 | See the day's farm visits in the order they will be | Must | E2 |
| worked |
| US10 | See which fifteen-minute slots are taken and which | Should | E2 |
| are free |
| US11 | Move a consultation to another slot | Should | E2 |
| US12 | Book with no internet connection | Must | E2 |
| US13 | Make a client inactive rather than delete them | Should | E1 |

10.4 Statement of the clinic's decision rights

For the avoidance of doubt, and because it affects how vendors should write
their proposals:

| Decision | Owner |
| --- | --- |
| -------------------------------------- | --------------------------------------- |
| Scope, and what is added to it | Dr Vardy |
| Acceptance of a delivered story | The evaluation panel, against |
| Appendix A |
| Whether a deliverable meets the | The evaluation panel; the Definition |
| Definition of Done | of Done is not negotiable |
| Day-view layout, because it | Ms Mahoney, as the primary daily user |
| determines adoption |
| Technical architecture, within the | The vendor |
| constraints of § 3.2 |
| Price | Fixed at award, subject to agreed |
| change requests |
