==============================================================================
# WORK BREAKDOWN STRUCTURE AND MILESTONES — DUNBAR APPOINTMENT SYSTEM (DAS)

| Field | Value |
| --- | --- |
| ------------------- | ---------------------------------------------------------- |
| Project | Dunbar Appointment System (DAS) |
| Client | Dunbar Veterinary Clinic, Boonah QLD |
| Prepared by | Ziyou Li — Business / Requirements Analyst |
| Basis | Deliverable-oriented decomposition, three levels, 8/80 |
| hour rule per work package |
| Related documents | Project Charter, User Stories US01-US13, this Request |
| for Proposal |

## 1. Decomposition principles applied

The action plan for this project sets four rules, and each is applied
literally below, because a WBS that violates its own stated rules is the first
thing a reviewer notices.

| Rule | How it is applied here |
| --- | --- |
| -------------------------------------- | --------------------------------------- |
| Deliverable-oriented, not | Work packages are nouns — "Client |
| process-oriented | record capability", "Farm run |
| ordering view" — not activities such |
| as "hold meeting" or "send email". |
| The one exception is 1.0 Project |
| Management, which the second rule |
| requires |
| At least three levels | Level 1 is the project. Level 2 is |
| the seven lifecycle phases plus |
| project management. Level 3 is a work |
| package with a single deliverable and |
| a named owner |
| 8/80 rule | Every Level 3 package is estimated |
| between 8 and 80 person-hours. Any |
| package that would exceed 80 hours is |
| decomposed further; any below 8 hours |
| is merged into its sibling |
| Named owner | Every Level 3 package carries exactly |
| one owner. A package with two owners |
| is a package nobody owns |

Level 1: 1.0 Dunbar Appointment System (DAS)

## 2. WBS dictionary

Hours are person-hours for the three-person team. The % column shows each
phase's share of the 528-hour total, which lets the project-management share
be checked against the 10–15 % rule.

1.0 Project Management — 62 h (11.7 %)

| ID | Work package | Deliverable | Owner | Hours |
| --- | --- | --- | --- | --- |
| ----- | ------------------------ | ------------------------- | ------------- | ------- |
| 1.1 | Project charter | Approved charter with | Lin Jueding | 14 |
| measurable success |
| criteria and explicit |
| exclusions |
| 1.2 | Kickoff meeting and | Minutes containing | Lin Jueding | 8 |
| minutes | decisions, action items |
| with owners and dates, |
| and an open-issues list |
| 1.3 | WBS and milestone | This document, | Ziyou Li | 12 |
| baseline | baselined after review |
| 1.4 | Schedule and Gantt | Time-phased plan with | Zhang Zheng | 12 |
| baseline | dependencies and the |
| eight milestones |
| 1.5 | Progress tracking and | Weekly status note | Lin Jueding | 10 |
| status reporting | against the baseline; |
| variance recorded |
| 1.6 | Risk and issue log | Updated log reviewed at | Lin Jueding | 6 |
| maintenance | each status point |

  Project management is 11.7 % of total effort, inside the 10–15 % band the
  action plan requires. It is a WBS branch in its own right rather than an
  overhead hidden inside other phases.

2.0 Requirements Analysis — 74 h (14.0 %)

This is the branch Ziyou Li owns. It is decomposed to the level at which each
artefact can be reviewed independently.

| ID | Work package | Deliverable | Owner | Hours |
| --- | --- | --- | --- | --- |
| ----- | -------------------------- | -------------------------- | ---------- | ------- |
| 2.1 | Stakeholder analysis | Stakeholder register | Ziyou Li | 8 |
| classified as approver / |
| resource provider / |
| influencer, with each |
| one's expectation |
| 2.2 | Scope definition and | In-scope capability list | Ziyou Li | 12 |
| exclusions register | and the named |
| out-of-scope register |
| with requester and |
| backlog destination |
| 2.3 | User story backlog | Thirteen stories with | Ziyou Li | 24 |
| (US01–US13) | acceptance criteria, |
| priority and epic |
| assignment |
| 2.4 | Domain rules | The two appointment | Ziyou Li | 14 |
| specification | kinds, the consulting |
| timetable, held slots |
| and cancellation rules |
| stated as testable rules |
| 2.5 | Paper-document analysis | Field-by-field | Ziyou Li | 10 |
| extraction from the |
| appointment book, run |
| sheet and registration |
| form, including the |
| contradictions found |
| 2.6 | Requirements review and | Reviewed backlog | Ziyou Li | 6 |
| sign-off | baseline; open questions |
| logged for the client |

3.0 Design — 66 h (12.5 %)

| ID | Work package | Deliverable | Owner | Hours |
| --- | --- | --- | --- | --- |
| ----- | ------------------------ | ------------------------- | ------------- | ------- |
| 3.1 | Data model | Entities for client, | Zhang Zheng | 16 |
| animal, property and |
| appointment, with the |
| two appointment kinds |
| represented honestly |
| 3.2 | Consulting timetable | Slot generation for the | Zhang Zheng | 14 |
| and slot model | irregular weekly |
| timetable, including |
| held slots |
| 3.3 | Validation rule design | Rules that refuse a | Ziyou Li | 12 |
| consultation without an |
| animal, a farm visit |
| without a property, and |
| a consultation off the |
| timetable |
| 3.4 | Day-view design | Layout mirroring the | Ziyou Li | 14 |
| paper book: time down |
| the side, a column per |
| room, farm visits in |
| work order |
| 3.5 | Architecture and | Offline-capable storage | Zhang Zheng | 10 |
| storage decision | decision with its |
| record | rationale, recorded as |
| a decision record |

4.0 Development — 138 h (26.1 %)

Breakdown follows the six capabilities in the charter, so that each build
package maps to a set of user stories rather than to a layer of the code.

| ID | Work package | Deliverable | Owner | Hours | Stories |
| --- | --- | --- | --- | --- | --- |
| ----- | ---------------- | ---------------- | ------------- | ------- | ---------------- |
| 4.1 | Client record | Create, find, | Zhang Zheng | 20 | US01, US13 |
| capability | update, make |
| inactive a |
| client |
| 4.2 | Animal | Animal CRUD | Zhang Zheng | 18 | US02 |
| capability | against a |
| client; list a |
| client's |
| animals |
| 4.3 | Animal search | Search by | Zhang Zheng | 12 | US06 |
| across clients | animal name |
| returning |
| owner and |
| contact |
| 4.4 | Property | Property CRUD | Zhang Zheng | 16 | US07 |
| capability | with locality |
| and access |
| notes |
| 4.5 | Appointment | Consultation | Zhang Zheng | 30 | US03, US08 |
| creation — | against an |
| both kinds | animal in a |
| slot; farm |
| visit against |
| a property |
| with duration |
| 4.6 | Reschedule and | Move to | Zhang Zheng | 20 | US04, US11 |
| cancel | another date |
| or time; |
| cancel while |
| keeping the |
| record visible |
| 4.7 | Day views | Slot grid with | Ziyou Li | 22 | US05, US09, |
| taken and free | US10 |
| slots; farm |
| visits in work |
| order |

5.0 Testing — 88 h (16.7 %)

| ID | Work package | Deliverable | Owner | Hours |
| --- | --- | --- | --- | --- |
| ----- | ------------------------ | ------------------------- | ------------- | ------- |
| 5.1 | Test strategy and plan | Approach covering both | Zhang Zheng | 10 |
| appointment kinds, |
| validation refusals and |
| persistence |
| 5.2 | Unit tests — | Tests proving the | Zhang Zheng | 20 |
| validation rules | invalid combinations |
| are refused |
| 5.3 | Unit tests — slot | Tests for every day of | Zhang Zheng | 18 |
| generation | the weekly timetable |
| including held slots |
| 5.4 | Integration tests — | Data survives a | Zhang Zheng | 16 |
| persistence | restart; a cancelled |
| appointment is still |
| present |
| 5.5 | User acceptance test | Scripts traceable to | Ziyou Li | 14 |
| scripts | acceptance criteria, |
| executed against the |
| stories as written in |
| Jira |
| 5.6 | Defect triage and | Logged defects, | Lin Jueding | 10 |
| retest | severity, retest |
| evidence |

6.0 Deployment — 46 h (8.7 %)

The brief states the handover is the code plus instructions for running it
from a clean checkout, so this phase is deliberately small: there is no
hosting target.

| ID | Work package | Deliverable | Owner | Hours |
| --- | --- | --- | --- | --- |
| ----- | ------------------------ | ------------------------- | ------------- | ------- |
| 6.1 | Repository setup and | Repository with branch | Lin Jueding | 10 |
| branching conventions | naming for stories and |
| a documented workflow |
| 6.2 | README and | Prerequisites, install, | Zhang Zheng | 14 |
| clean-checkout run | run, and how to run the |
| instructions | tests |
| 6.3 | Sample configuration | Illustrative .env or | Zhang Zheng | 10 |
| and seed data | config sample and |
| sample records — never |
| real client data |
| 6.4 | Automated test | A single documented | Zhang Zheng | 12 |
| execution in the | command that runs the |
| repository | suite |

7.0 Training and Handover — 34 h (6.4 %)

| ID | Work package | Deliverable | Owner | Hours |
| --- | --- | --- | --- | --- |
| ----- | ------------------------ | ------------------------- | ------------- | ------- |
| 7.1 | Handover documentation | The six sections the | Ziyou Li | 16 |
| brief fixes: delivered, |
| not delivered, setup, |
| known issues, |
| credentials and |
| configuration, |
| next-sprint backlog |
| 7.2 | Front-desk walkthrough | A session with Trina | Ziyou Li | 8 |
| using the day view |
| against a sample day |
| 7.3 | Known issues and | Open defects, fragile | Zhang Zheng | 10 |
| limitations register | behaviour, and |
| assumptions that break |
| if booking practice |
| changes |

8.0 Project Closure — 20 h (3.8 %)

| ID | Work package | Deliverable | Owner | Hours |
| --- | --- | --- | --- | --- |
| ----- | ------------------------ | ------------------------- | ------------- | ------- |
| 8.1 | Sprint review and | Recorded outcome; what | Lin Jueding | 8 |
| retrospective | worked and what did not |
| 8.2 | Product backlog | Remaining items | Ziyou Li | 8 |
| grooming | prioritised and left |
| visible for the next |
| team |
| 8.3 | Final document | Project name, milestone | Ziyou Li | 4 |
| reconciliation | names and capability |
| names verified |
| identical across all |
| documents |

## 3. Effort roll-up

| Level 2 phase | Hours | Share |
| --- | --- | --- |
| --------------------------- | ------- | -------- |
| 1.0 Project Management | 62 | 11.7 % |
| 2.0 Requirements Analysis | 74 | 14.0 % |
| 3.0 Design | 66 | 12.5 % |
| 4.0 Development | 138 | 26.1 % |
| 5.0 Testing | 88 | 16.7 % |
| 6.0 Deployment | 46 | 8.7 % |
| 7.0 Training and Handover | 34 | 6.4 % |
| 8.0 Project Closure | 20 | 3.8 % |
| Total | 528 | 100 % |

Checks. Project management is 11.7 %, within the required 10–15 %. Testing
plus design is 29.2 % against 26.1 % development, which is a defensible ratio
for a project whose Definition of Done makes tests mandatory per story.

## 4. Work-package count and the 8/80 rule

| Level 3 package size | Count | Action taken |
| --- | --- | --- |
| ---------------------- | ------- | ----------------------------------------------- |
| Under 8 hours | 0 | None needed |
| 8–80 hours | 39 | None needed |
| Over 80 hours | 0 | None needed — the largest package is 4.5 at |
| 30 hours |

Every work package sits inside the 8/80 band. The rule was applied at the
point of decomposition rather than used as a retrospective check, which is why
no package needed to be split afterwards.

## 5. Milestones

Eight milestones, as the action plan requires. A milestone here has zero
duration — it is a point in time at which a defined condition becomes true,
not a task. The Gantt chart marks each with a diamond and no bar.

| # | Milestone | Condition that makes it true | Predecessor | Target |
| --- | --- | --- | --- | --- |
| ---- | ------------------- | ------------------- | ------------- | ------------------- |
| M1 | Project start | Charter approved | — | End of planning |
| by the sponsor | week 1 |
| and the baseline |
| set |
| M2 | Requirements | US01–US13 | M1 | End of planning |
| approved | reviewed, the | week 2 |
| exclusions |
| register |
| accepted, and the |
| domain rules |
| signed off |
| M3 | Design approved | Data model, slot | M2 | Sprint week 1 |
| model, validation |
| rules and |
| day-view design |
| frozen |
| M4 | Development | All committed | M3 | Sprint week 2 |
| complete | stories |
| implemented and |
| merged through |
| reviewed pull |
| requests |
| M5 | UAT started | Acceptance | M4 | Sprint week 2 |
| scripts executing |
| against the |
| stories as |
| written in Jira |
| M6 | UAT complete | Every acceptance | M5 | Sprint week 3 |
| criterion on |
| every committed |
| story |
| demonstrated |
| M7 | Go live | Handover | M6 | Sprint week 3 |
| documentation |
| complete; |
| application runs |
| from a clean |
| checkout by |
| following the |
| README alone |
| M8 | Project closure | Retrospective | M7 | Sprint week 3 end |
| held, backlog |
| groomed and left |
| visible, final |
| documents |
| reconciled |

Milestone dependency chain

M1 ──▶ M2 ──▶ M3 ──▶ M4 ──▶ M5 ──▶ M6 ──▶ M7 ──▶ M8
start   req    design  dev     UAT     UAT     go      closure
        appr   appr    done    start   done    live

The chain is strictly sequential at milestone level. Work packages may overlap
— for example, test strategy (5.1) begins during design — but no milestone can
be declared before its predecessor, because each one is defined as a condition
that depends on the previous condition being true.

## 6. Dependencies between work packages

Only genuine finish-to-start dependencies are listed. A dependency recorded
where none exists is worse than no dependency, because it inflates the
critical path and hides the real one.

| Predecessor | Successor | Type | Reason |
| --- | --- | --- | --- |
| ----------------------- | ----------------------- | ------ | ----------------------- |
| 2.3 User story | 2.6 Requirements | FS | The review reviews |
| backlog | review | the backlog |
| 2.4 Domain rules | 3.2 Slot model | FS | The slot model |
| implements the |
| timetable rules |
| 2.3 User story | 3.3 Validation rules | FS | Validation derives |
| backlog | from the acceptance |
| criteria |
| 3.1 Data model | 4.1–4.4 record | FS | The record |
| capabilities | capabilities need the |
| entities |
| 3.2 Slot model | 4.5 Appointment | FS | A consultation cannot |
| creation | be placed without |
| slot knowledge |
| 3.3 Validation rules | 4.5 Appointment | FS | Creation enforces the |
| creation | rules |
| 4.1, 4.2, 4.4 | 4.5 Appointment | FS | An appointment |
| creation | attaches to a client, |
| an animal and a |
| property |
| 4.5 Appointment | 4.6 Reschedule and | FS | Nothing can be moved |
| creation | cancel | that was never |
| created |
| 4.5 Appointment | 4.7 Day views | FS | The grid shows |
| creation | appointments that |
| exist |
| 5.1 Test strategy | 5.2–5.4 test packages | FS | The packages follow |
| the strategy |
| 4.1–4.7 Development | 5.4 Integration tests | FS | Integration tests |
| exercise the built |
| behaviour |
| 6.2 README | M7 Go live | FS | Go live requires the |
| clean-checkout |
| condition |

No circular dependencies. The graph is a DAG: every edge runs from an earlier
phase to a later one, and no edge returns to a phase already passed. Verified
by inspection of the list above — all successors appear in a later or equal
phase number.

## 7. Assumptions behind the estimates

| # | Assumption | Effect if wrong |
| --- | --- | --- |
| ---- | ------------------------------------ | ------------------------------------ |
| E1 | The 528-hour total is available | Schedule slips; scope must be cut |
| across three people over five | rather than hours added, because |
| calendar weeks | K5 fixes the sprint length |
| E2 | Development packages 4.1–4.4 are | Estimates would be optimistic; |
| structurally similar, so the | mitigated by making 4.1 the first |
| fourth costs less than the first | delivered so its actual cost |
| calibrates the rest |
| E3 | Automated tests are written | Test effort would be deferred and |
| alongside each package because the | then compressed; the 16.7 % |
| Definition of Done requires them | testing share exists to prevent |
| this |
| E4 | No deployment target exists, so | A hosting requirement would add a |
| 6.0 is small | phase this plan does not contain |
| E5 | The consulting timetable will not | 3.2 and 5.3 would need rework; |
| change mid-sprint | mitigated by making the timetable |
| configuration rather than code |

## 8. Reconciliation check

The action plan's quality checklist requires that the project name, milestone
names and capability names are identical across all four documents. This
section is the reconciliation point.

| Name | This document | Charter | User stories | RFP |
| --- | --- | --- | --- | --- |
| -------------- | --------------- | --------------- | --------------- | --------------- |
| Project name | Dunbar | same | same | same |
| Appointment |
| System (DAS) |
| Capability | Client | same | US01, US13 | FR-01, FR-02 |
| C1 | records |
| Capability | Animals | same | US02, US06 | FR-03, FR-04 |
| C2 |
| Capability | Properties | same | US07 | FR-05 |
| C3 |
| Capability | Appointments | same | US03, US08 | FR-06, FR-07 |
| C4 | (two kinds) |
| Capability | Change and | same | US04, US11 | FR-09 |
| C5 | cancel |
| Capability | Day views | same | US05, US09, | FR-08, FR-10 |
| C6 | US10 |
| Milestones | M1–M8 | M1, M2 | M4, M6 | M7 referenced |
| referenced | referenced |

Milestone and capability names are used verbatim across the four documents.
This table exists so that the check can be made mechanically rather than by
memory.