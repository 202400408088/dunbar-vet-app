# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-10-04

### Added
- Customer management module (create, view, edit, delete, search).
- Appointment module with two types:
  - In-clinic consultation (fixed 15-minute slot, clinic-hours validation).
  - Farm visit (estimated duration, no fixed slot).
- Today's dashboard with summary statistics.
- Offline persistence layer using `localStorage`.
- Environment-aware configuration (`config/config.json` and
  `config/config.production.json`).
- Lightweight automated test suite (`tests/app.test.js`).
- Project documentation (README, LICENSE, CHANGELOG).
