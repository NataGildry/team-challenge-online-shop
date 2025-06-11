module.exports = {
  '{apps,libs,tools}/**/*.{js,ts,jsx,tsx,json,html}': [
    /** does the code formatting using the prettier config  **/
    (files) => `nx format:write --files=${files.join(',')} --write`,

    /** fix linting problems **/
    (files) => `nx affected --target lint --files=${files.join(',')} --fix`,
  ],
};
