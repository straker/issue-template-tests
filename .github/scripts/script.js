#!/usr/bin/env node
const core = require('@actions/core');
const github = require('@actions/github');

const bodyLines = github.context.payload.pull_request.body.split(/[\r\n]+/);
const footer = bodyLines[bodyLines.length - 1].toLowerCase();

console.log('bodyLines:', bodyLines);
console.log('footer:', footer);

async function main() {
  core.info(`checking is user is a member of the team: "${github.context.actor}"`)

  const result = await github.rest.teams.getMembershipForUserInOrg({
    org: context.repo.owner,
    team_slug: 'axe-api-team',
    username: github.context.actor
  })

  console.log({result})

  if (
    !(
      footer.startsWith('closes: #') ||
      footer.startsWith('ref: ') ||
      footer.startsWith('refs: ') ||
      footer.startsWith('qa notes: ') ||
      footer.startsWith('no qa required')
    )
  ) {
    console.error('PR Footer WRONG!');
    return;
  }

  console.log('PR footer has correct syntax');
}

main();