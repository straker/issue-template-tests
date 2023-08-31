#!/usr/bin/env node
const core = require('@actions/core');
const github = require('@actions/github');

const bodyLines = github.context.payload.pull_request.body.split('\n');
const footer = bodyLines[bodyLines.length - 1];

console.log('bodyLines:', bodyLines);
console.log('footer:', footer);