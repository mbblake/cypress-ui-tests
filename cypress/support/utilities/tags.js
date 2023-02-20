// Allows the user to specify a comma-separated list of tags
// to run only the tests that have at least 1 of those tags defined
// for them
export const tags = (definedTags, testFn) => {
    const specifiedTags = Cypress.env("TAGS");
    if (specifiedTags) {
        const specifiedTagsArr = specifiedTags.toLowerCase().split(",");
        const hasMatch = definedTags.some((definedTag) =>
            specifiedTagsArr.includes(definedTag)
        );
        if (hasMatch) testFn();
    } else {
        testFn();
    }
};
