## Worksample
Try at [gh-pages](https://somalianivan.github.io/challenge/). Deployed using gh actions for fun.

Design Criteria:
- validation of inputs
    - Using Formik - [npm graphs](https://www.npmtrends.com/formik-vs-formsy-vs-react-final-form).
    - Use yup schema to validate the input. can be done asynchronously
- display on small and large form factors
    - Styled components, with css media queries vs dom manipulations through js
- visual/brand elements
    - Probably create a library of droppable react components and color palette
    - Have a global styled component wrapper that injects fonts
- architected to adapt to information model changes
    - should be pretty easy since all of the components have clear interactions
    - use sagas to handle side effects like backend xhr
- testability
    - given more time would add jest test runner
    - Composed all my components with higher order components so its easy to unit test
    - would unit test sagas as well
- page load and display performance
    - I used babel with parcel(sub with webpack in a real project), I would probably have bundle-size ci step to make sure the bundle size doesn't grow unreasonably large
    - use immutable.js with recompose for memoization
- analytics
    - product analytics - [https://github.com/rangle/redux-beacon/blob/master/docs/targets/amplitude.md](https://github.com/rangle/redux-beacon/blob/master/docs/targets/amplitude.md)
    - you can have metrics on your s3 buckets and if you use cloudfront, have cloudfront metrics
- split testing?
    - can you launch darkly with some combination
- deploy.sh/Makefile is a bad idea. Had a lot of success with pyinvoke for tasks/workflows like deploy, lint, etc ...
