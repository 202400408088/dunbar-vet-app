==============================================================================
# PROJECT CHARTER — DUNBAR VETERINARY CLINIC APPOINTMENT SYSTEM

| Field | Value |
| --- | --- |
| --------------------- | -------------------------------------------------------- |
| Project name | Dunbar Appointment System (DAS) |
| Client organisation | Dunbar Veterinary Clinic, 14 High Street, Boonah QLD |
| 4310 |
| Client sponsor | Dr Simone Vardy, Principal Veterinarian & Owner |
| Prepared by | Ziyou Li — Business / Requirements Analyst |
| (procurement lead) |
| Team | Three members (see § 5) |
| Document version | 1.0 |
| Status | For approval at the Kickoff meeting |

## 1. Purpose

Dunbar Veterinary Clinic books all of its work into two separate paper
records: an A3 spiral appointment book on the front counter, ruled in
fifteen-minute lines with a column per consulting room, and a foolscap green
diary for farm work. There is exactly one copy of each. The clinic has about
2,400 client records, roughly 3,100 animals and around 180 rural properties,
and it books in-clinic consultations and farm visits out of the same front
desk.

The documented failures are not hypothetical. Two clients have been written
onto the same line and one was sent home. A pregnancy-testing job went into
the wrong week and 120 cows were yarded for nobody. A client drove 40 km with
a lame cow on a trailer because his farm call had been written into the
consult book. A vet drove 190 km in one Thursday because the day was ordered
by when the calls came in rather than by where the roads run. Nobody can say
how many appointments were booked last month against how many were actually
seen, because counting means reading the book by hand.

This project delivers one appointment system that holds both halves of what
the practice does, so that whoever answers the telephone can book the right
kind of work in the right place without deciding which book to open.

## 2. Business Objectives and Measurable Success Criteria

The action plan for this project warns explicitly against vague success
criteria. Each objective below therefore has a measurable measure, a baseline
taken from the case study, and a target.

| # | Objective | Measure | Baseline | Target (at handover) |
| --- | --- | --- | --- | --- |
| ---- | ---------------------- | -------------------- | ---------------- | -------------------- |
| O1 | Stop appointments | Number of | 1 recorded | 0 — the two |
| being written into | booking-type | event (June, | appointment kinds |
| the wrong record | mis-filings per | 40 km wasted | are structurally |
| month | trip); | distinct and the |
| believed | system refuses a |
| under-reported | consultation |
| without an animal |
| or a farm visit |
| without a property |
| O2 | Let more than one | Number of staff | 1 (whoever is | ≥ 2, verified by a |
| person use the | who can view or | holding the | test that reads |
| schedule at once | edit the same day | book) | the day view while |
| simultaneously | a booking is |
| written |
| O3 | Make the day's | Steps to answer | Run a finger | 1 query, returning |
| remaining capacity | "what is still | down the page | taken and free |
| visible without | free today?" | fifteen-minute |
| reading a page | slots |
| O4 | Make farm runs | Ordering of the | Green diary, | 100 % of a day's |
| workable in road | day's farm visits | ordered by | farm visits appear |
| order rather than | is explicit and | when the call | in an order the |
| arrival order | editable | came in | vet can set |
| O5 | Survive an internet | Booking works with | Paper works; | All |
| outage without | the network | nothing | create/read/update |
| losing the ability | unavailable | digital does | operations |
| to book | complete with no |
| network connection |
| O6 | Produce | Time to produce a | "Counting | 0 manual counting; |
| bookable-versus-seen | week's | would mean | the figure is |
| data without hand | booked-versus-seen | going through | derivable from |
| counting | count | the book by | stored |
| hand" | appointments and |
| their state |
| O7 | Keep the working | Definition of Done | n/a | 100 % of committed |
| system in a state a | satisfied per | sprint stories |
| new team can pick up | story | meet all seven |
| Definition of Done |
| items |

O6 is deliberately stated as derivable rather than reported: a dedicated
reporting screen is out of scope for this project (see § 4), but the
underlying data must be stored so that the count is possible without
re-reading paper.

## 3. Project Scope

3.1 In scope

The system is a create/read/update/delete application over a small number of
related records, plus one genuine piece of domain logic — the two appointment
kinds. It is described here in terms of capability, not technology.

| Capability | What it covers |
| --- | --- |
| ------------------------------- | ---------------------------------------------- |
| C1 — Client records | Create, find, update and make inactive a |
| client (a household or a farming business), |
| holding the details needed to identify and |
| contact them |
| C2 — Animals | Each animal recorded individually against a |
| client, with the details that identify it; |
| list a client's animals; search by animal |
| name across all clients |
| C3 — Properties | Each property recorded against a client with |
| a name and a locality; access notes |
| C4 — Appointments (two kinds) | In-clinic consultation: one specific animal, |
| a fixed fifteen-minute slot on the |
| consulting timetable, one of two consulting |
| rooms. Farm visit: booked against a |
| property, a start time and an estimated |
| duration in hours, not a slot and not fixed. |
| An appointment's kind determines what it |
| attaches to and how its time is expressed |
| C5 — Change and cancel | Move an appointment to another date or time; |
| cancel it. A cancelled appointment remains |
| visible in the record. Changing one |
| appointment must not affect another |
| C6 — Day views | The clinic's day listed with taken and free |
| fifteen-minute slots; the day's farm visits |
| listed in the order they are to be worked; a |
| client's appointments listed |

3.2 Explicitly out of scope

Scope creep is the second failure the action plan names. These are excluded,
and several of them were actively requested by stakeholders. They belong in
the product backlog, prioritised and visible, but they are not built:

| Excluded | Requested by | Where it now sits |
| --- | --- | --- |
| ---------------------------- | ------------------- | ----------------------------- |
| Clinical records, | Simone | Product backlog |
| treatment histories, case |
| notes |
| Prescriptions and the drug | Simone | Product backlog (and |
| register | legally tied to VetLedger) |
| Invoicing, fees and | Simone, Trina | Product backlog |
| payments |
| Pre-payment flags / "three | Trina | Product backlog |
| DNAs and they pre-pay" |
| Vaccination reminders and | Simone, Jo, Trina | Product backlog |
| recalls |
| Sending SMS or email; | Trina, Simone | Product backlog |
| day-before text reminders |
| Online booking by clients | Simone | Product backlog (Simone |
| themselves | withdrew her own support: |
| "I wouldn't trust them to |
| pick the right reason") |
| Waiting list to fill | Trina | Product backlog |
| cancellations |
| The surgery and theatre | Simone | Product backlog |
| list |
| Route or travel-time | Wes | Product backlog — but the |
| planning between | day's farm visits are |
| properties | orderable (§ C6) |
| The after-hours roster | — | Product backlog |
| Stock and inventory; the | — | Product backlog |
| retail shelf |
| Migrating anything out of | — | Product backlog; records |
| VetLedger 4 | stay where they are |
| A booked-versus-seen | Simone | Product backlog — the data |
| reporting screen | is in scope (O6), the |
| screen is not |

3.3 Scope boundary statement

  The system replaces the counter appointment book and the green farm diary.
  It does not replace VetLedger 4, the invoicing, or the drug register.

This sentence is the single most important boundary in the project. It is
short on purpose so that it can be repeated verbatim in every document, and so
that the handover can state plainly what was parked and why.

## 4. Key Constraints and Assumptions

4.1 Constraints

| # | Constraint | Source | Consequence for the design |
| --- | --- | --- | --- |
| ---- | ----------------------- | ------------------------ | ------------------------ |
| K1 | Must work with no | Simone: "It goes down | No server dependency |
| internet connection | weekly. It went down | for core booking. Data |
| for two days in | stored locally. Any |
| February." Wes: | hosted database or |
| "There's no reception | cloud service is not |
| past Bunjurgen. Not | procurable for this |
| patchy — none." | project |
| K2 | Consulting timetable | Appointment book | Mon/Wed/Fri |
| is fixed and | footer | 8:30–17:30, last |
| irregular | booking 17:15, |
| fifteen-minute slots, |
| two rooms. Tue/Thu |
| consults end 10:15, |
| vets on the road from |
| 10:30. Sat 8:00–11:00. |
| Closed Sunday |
| K3 | 11:15 and 11:30 are | Appointment book | The slot grid is not |
| held for surgery | footer | simply "every free |
| drop-offs every | slot is bookable" |
| consult day and must |
| not be filled |
| K4 | A consultation is | Case study § 4 | Forcing both into one |
| exactly one slot; a | shape with blank |
| farm visit is not a | fields is a defect, |
| slot and its length | not a simplification |
| is a judgement |
| K5 | One sprint of three | Case study § 10, | Sprint backlog scoped |
| weeks, three-person | action plan | to roughly 8–15 |
| team | stories across one or |
| two epics; everything |
| else stays in the |
| product backlog |
| K6 | Definition of Done is | Case study § 8 | Every story must ship |
| fixed and cannot be | with tests, a reviewed |
| amended | pull request, and a |
| README that works from |
| a clean checkout |
| K7 | Client data is | Simone: "some of these | No real client data in |
| sensitive | people are not keen on | the repository. |
| being findable" | Configuration and |
| sample data use |
| illustrative values |
| only |
| K8 | Client-facing pricing | Registration form | Consult $78, recheck |
| is reference data, | $52; farm call-out |
| not a feature | $145 per property per |
| visit plus $220 per |
| hour on farm. Recorded |
| for context; no |
| billing in scope |

4.2 Assumptions

Each assumption is stated with what happens if it proves false, because an
assumption with no stated consequence is a wish.

| # | Assumption | If it is wrong |
| --- | --- | --- |
| ---- | ------------------------------------ | ------------------------------------ |
| A1 | The clinic runs on the two rhythms | The slot-generation logic is |
| recorded in the appointment book | configuration-driven, so a |
| and the case study, and they will | timetable change is a |
| not change during the sprint | configuration change rather than a |
| code change |
| A2 | A client can have animals, | The data model already permits all |
| properties, both, or neither | four combinations and a test |
| asserts each |
| A3 | Cancelled appointments must remain | The model stores an appointment |
| visible rather than be deleted | state rather than removing rows; a |
| hard delete would be a defect |
| against an explicit criterion |
| A4 | Farm visit "what was treated" is | Not modelled as a required field. |
| genuinely unknown at booking time | Recording it after the visit is |
| backlog, not sprint scope |
| A5 | The two consulting rooms are the | Room is an attribute of a |
| only bookable in-clinic resource | consultation, so adding a third |
| room is data, not schema |
| A6 | Delivery is code plus run | Effort reserved for documentation |
| instructions from a clean | rather than hosting |
| checkout; no deployment target |

## 5. Team, Roles and Responsibilities

The action plan requires that roles be written down explicitly, and that one
person may hold more than one role. RACI notation is used against the six
capabilities: R responsible, A accountable, C consulted, I informed.

| Member | Primary role | Also | C1 Clients | C2 Animals | C3 Properties | C4 Appointments | C5 Change/cancel | C6 Views |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ---------- | -------------- | ------------- | ---------- | ---------- | ------------ | -------------- | --------------- | ---------- |
| Lin | Project | Recorder | A | A | A | A | A | A |
| Jueding | Manager | (minutes) |
| Ziyou Li | Business / | Procurement | R | R | R | R | R | R |
| Requirements | lead |
| Analyst |
| Zhang | Technical | Scheduling | C | C | C | C | C | C |
| Zheng | Lead |

| Member | Deliverable ownership |
| --- | --- |
| ------------- | ---------------------------------------------------------------- |
| Lin Jueding | Project charter (final approval), Kickoff meeting minutes, WBS |
| and Gantt review, overall timeline |
| Ziyou Li | Requirements analysis (charter input, WBS requirements branch, |
| US01–US13 with acceptance criteria, scope boundary), |
| Procurement: procurement plan and RFP (10 sections), glossary |
| and appendices |
| Zhang Zheng | Technical feasibility assessment, WBS technical decomposition, |
| slot-generation design, test strategy |

Note on the role table. The action plan lists generic roles; this charter maps
them to the team, and the requirement above all others is that the Analyst
owns the statement of what the client needs, because a requirement attributed
to two people is a requirement nobody owns when it is wrong.

## 6. Stakeholders

The action plan's checklist requires that the stakeholder list cover three
classes: who approves, who supplies resources, and who can influence the
project.

| Stakeholder | Class | Interest / expectation | Engagement |
| --- | --- | --- | --- |
| ------------------ | ------------------- | ------------------- | ------------------- |
| Dr Simone Vardy | Approves; | Wants to see the | Approval |
| — Principal | supplies | shape of a week; | authority for |
| Veterinarian & | resources (she | what was booked | scope. |
| Owner | carries the | against what was | Interviewed 19 |
| commercial risk | seen; realistic | Aug 2026 |
| and approved the | about budget; |
| $18,000 | deeply suspicious |
| ultrasound) | of anything that |
| stops working |
| when the internet |
| drops |
| Trina Mahoney — | Influences most | The thirty | Principal source |
| Practice Manager | heavily in | seconds between a | of requirements. |
| practice; the | client asking for | Interviewed 17 |
| primary daily | a time and her | Aug 2026 |
| user | writing it down. |
| Will use the |
| software more |
| than anyone and |
| is most attached |
| to the current |
| book ("Just make |
| it look like the |
| book") |
| Dr Wes Ngatai — | Influences the | The run sheet in | Secondary source. |
| Associate | farm half | the ute: where he | Interviewed 20 |
| Veterinarian | is going, in what | Aug 2026 |
| (Large Animal) | order, how long |
| each job really |
| takes, what he |
| needs before he |
| arrives. Little |
| interest in |
| consulting rooms, |
| great interest in |
| not driving the |
| same road three |
| times |
| Dr Ellen | Informed | Needs to read a | Informed via the |
| Braithwaite — | day's schedule | day view design |
| Locum (Fridays) | without training |
| Jo Weeks, Ali | Consulted | Surgery drop-off | Consulted on the |
| Farrugia — | slots | slot rules |
| Veterinary | (11:15/11:30) |
| Nurses | must stay clear; |
| handwriting on |
| the book is |
| illegible |
| Mia Boyd — | Consulted | Saturday is a | Consulted on the |
| Saturday cover | short consulting | Saturday |
| morning, | timetable |
| 8:00–11:00 |
| The Beaudesert | Informed | Fortnightly | Out of scope; |
| practice | after-hours | informed only |
| (after-hours | alternation |
| partner) |
| Unit Assessor | Approves the | Definition of | Reports and |
| (MSD426) | deliverable | Done, handover | demonstration |
| documentation, |
| demonstration |
| against the Jira |
| stories |

Explicitly not a stakeholder for this project: clients of the clinic. Online
self-booking was requested and withdrawn by Simone in the same interview.

## 7. Feasibility

The action plan warns against a bare "feasible" with no supporting argument.
Each dimension below states the basis of its conclusion and its main
assumption.

| Dimension | Conclusion | Basis |
| --- | --- | --- |
| ------------- | ----------------------------- | ---------------------------------- |
| Technical | Feasible | The brief confirms the shape is |
| create/read/update/delete over a |
| few related records plus one |
| piece of domain logic, |
| deliverable as either a |
| command-line or web application. |
| Local persistent storage is |
| sufficient (K1), so no hosting, |
| no network dependency and no |
| integration with VetLedger 4 is |
| required. The only non-trivial |
| logic — slot validity and the |
| two appointment kinds — is |
| bounded and completely specified |
| by K2–K4 |
| Economic | Feasible | Development cost is the team's |
| time. There is no software |
| licence to buy: the stack can be |
| built entirely from open-source |
| and standard-library components, |
| and the project explicitly |
| requires no deployment target. |
| The avoided-cost argument is |
| available for the business case |
| — a vendor quoted Simone $14,000 |
| per year, which she described as |
| "a nurse for four months" |
| Operational | Feasible with one condition | The clinic already performs |
| every workflow this system |
| supports; nothing new is |
| invented. The condition is |
| adoption by Trina, the heaviest |
| user and the person most |
| attached to the paper book. Her |
| own words set the design |
| constraint: "Just make it look |
| like the book." The day view |
| therefore mirrors the book's |
| layout — time down the side, a |
| column per room |
| Schedule | Feasible if scope holds | Two weeks of proposal and |
| planning followed by a single |
| three-week sprint, per the |
| brief. The sprint commits to a |
| subset of the backlog (US01–US13 |
| are the identified core; the |
| sprint commits to roughly 8–15 |
| stories). Schedule risk is |
| concentrated in scope, not in |
| technical difficulty |

Cross-cutting feasibility note. The single largest technical risk is K1
(offline operation). It is treated as a feasibility constraint rather than a
feature, because a solution that requires connectivity is not a partial
solution — it is a solution that does not exist two days a year.

## 8. High-Level Risks

Details and mitigation owners are expanded in the planning documents; this
section records only the highest-level risks, as the action plan directs.

| # | Risk | Likelihood | Impact | Response |
| --- | --- | --- | --- | --- |
| ---- | ------------------------- | ------------ | -------- | ------------------------- |
| R1 | Scope creep — | High | High | The scope boundary |
| stakeholders requested | statement (§ 3.3) is |
| at least ten | repeated verbatim in |
| capabilities beyond the | every document. Parked |
| core, and Simone has an | items are recorded in |
| open mind about all of | the product backlog |
| them | with their requester |
| named |
| R2 | A hosted or | Medium | High | Offline operation is a |
| network-dependent | success criterion (O5), |
| choice is made for | not a preference, and |
| convenience, breaking | is asserted by a test |
| K1 |
| R3 | The two appointment | Medium | High | Constraint K4 is stated |
| kinds are flattened | as a named defect: |
| into one shape with | "attaches a booking to |
| unused fields | the wrong kind of |
| record" appears in the |
| Definition of Done's |
| critical-defect list |
| R4 | Adoption fails at the | Medium | Medium | Trina is the design |
| front desk because the | reference for the day |
| day view does not | view; her quoted words |
| resemble the book | are recorded in § 7 as |
| the design constraint |
| R5 | Team availability | Medium | Medium | The action plan's own |
| across a three-person | mitigation: |
| team with other | asynchronous review in |
| commitments | the shared document, |
| then a focused |
| 30-minute discussion |
| R6 | Effort spent on | Low | Medium | Documentation is |
| documentation instead | generated from the same |
| of working software | artefacts as the build |
| (user stories drive |
| both Jira and the |
| tests), so it is not a |
| separate stream of work |
| R7 | Sensitive client data | Low | High | K7: illustrative values |
| leaks into the | only, and the |
| repository | Definition of Done |
| requires a clean |
| checkout to run with no |
| files that exist on one |
| machine only |

## 9. Approval

| Role | Name | Signature | Date |
| --- | --- | --- | --- |
| ----------------------------------------- | ----------------- | ----------- | ------ |
| Client sponsor (Principal Veterinarian | Dr Simone Vardy |
| & Owner) |
| Project Manager | Lin Jueding |
| Business / Requirements Analyst | Ziyou Li |
| Technical Lead | Zhang Zheng |

Appendix A — Requirement traceability

Each objective in § 2 is traceable to the capabilities in § 3 and forward to
the user stories in User Stories US01-US13. This table is the artefact the
action plan's quality checklist calls "reconciliation": the project name,
milestone names and capability names must be identical across all four
documents.

| Objective | Capability | User stories |
| --- | --- | --- |
| ----------- | ------------ | ------------------------------------------------ |
| O1 | C2, C3, C4 | US03, US06, US07, US08 |
| O2 | C6 | US05, US13 |
| O3 | C6 | US10 |
| O4 | C6 | US09 |
| O5 | all | US12 (and every story's persistence criterion) |
| O6 | C4, C5 | US04, US11 |
| O7 | all | the Definition of Done, applied to every story |

Appendix B — Source documents consulted

| Source | Used for |
| --- | --- |
| -------------------------------------- | --------------------------------------- |
| Case Study — Dunbar Veterinary | Objectives, scope, constraints, |
| Clinic (MSD426, Case Study 5) | stakeholders, Definition of Done |
| Interview — Dr Simone Vardy, 19 Aug | O6, the $14,000 quotation, offline |
| 2026 | requirement, withdrawn self-booking |
| request |
| Interview — Trina Mahoney, 17 Aug | The day view design constraint, |
| 2026 | search by animal name, the two-book |
| distinction |
| Interview — Dr Wes Ngatai, 20 Aug | Farm visit shape, run ordering, |
| 2026 | access notes, offline requirement |
| Paper document A — Appointment book, | K2, K3, the emergency-handling rule, |
| day page | the two-cats defect |
| Paper document B — Farm run sheet, | Farm visit fields, access notes, |
| green diary | actual-versus-estimate duration |
| Paper document C — New client and | Client and animal fields, property |
| patient registration | and access fields, fee reference data |
| 小组学习行动方案 (team action plan) | Deliverable list, role structure, |
| quality checklist, risk table |
