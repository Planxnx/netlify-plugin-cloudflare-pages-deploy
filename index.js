export const onPostBuild = async function ({ inputs, constants, netlifyConfig, utils: { run, build, status } }) {
  try {
    const { BRANCH, CLOUDFLARE_PAGES_PROJECT_NAME } = netlifyConfig.build.environment;
    const command = `${inputs.package_exec} wrangler pages deploy ${constants.PUBLISH_DIR} --project-name=${CLOUDFLARE_PAGES_PROJECT_NAME} --branch=${BRANCH}`;
    await run.command(command);
    status.show({
      summary: "Deployed to Cloudflare Pages Successfully",
      text: `Deployed to Pages/${CLOUDFLARE_PAGES_PROJECT_NAME}/${BRANCH}`,
    });
  } catch (error) {
    build.failBuild("Failed while deploy your site to Cloudflare Pages", { error });
  }
};
