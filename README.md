## Triangle Tracker with webpack, Karma and Jasmine

This is a demonstration project that uses Karma and Jasmine with webpack. In addition to being an important part of eventually updating our curriculum from Gulp to webpack, this setup also helps with other pain points in the Week 1 curriculum. For instance:

* Students don't understand why we should use Karma since they first learn how to use Jasmine on its own. Now it's necessary to use Karma as a test runner immediately because Jasmine doesn't natively understand ES6 `import` and `export`.

* No weird transition from using `require` to using `import` and `export`. Students will start using the latter right away.

* Karma and Jasmine work together with webpack. Specifically, Karma uses webpack to preprocess files so Jasmine can test them. With our current curriculum, Gulp and Karma/Jasmine don't work together (but instead work independently of each other).

* This is a big step towards giving up Gulp!
