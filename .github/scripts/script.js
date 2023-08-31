#!/usr/bin/env node
const core = require('@actions/core');
const github = require('@actions/github');

console.log('github.context.payload.pull_request:', github.context.payload.pull_request);