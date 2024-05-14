# React + TypeScript + Vite

This task provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

1. cd into project path
2. npm install - if you prefer yarn - remove the lock file and run yarn
3. npm run dev
4. to run active tests - run npm run tests, this will run vitest to run test suites
5. to find out overall test coverage, run - npm run coverage

Any questions on decisions to use certain technologies please let me know.
I have left the env in as a CONST type file, well aware normally this would be ignored normally.

- Things i was thinking on doing with more time
- Optimistic update inline with invalidation of queries from cache, functionality works fine as is, but with a small tweek with optmistic updates, the likes count will still update with slow connection.
- Cypress test suite, e2e testing is a must for me, and is to be prioritised over unit tests in my opinion.
- more custom lazy loading as opposed to just brower api version - tehre wasnt enough images to actually test this really
- further optmising of blurred image to transition photos on content
- use of cdn for images
