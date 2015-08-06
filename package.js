Package.describe({
    name: "lifelynl:focuspoint",
    summary: "A beautiful library which deals with the problem of ugly cropped images.",
    version: "1.0.7",
    git: "https://github.com/lifelynl/meteor-focuspoint.git"
});

Package.onUse(function(api) {
    api.addFiles([
        'bower_components/classlist/classList.min.js',
        'bower_components/requestAnimationFrame/app/requestAnimationFrame.js',
        'bower_components/focuspoint/dist/focuspoint.js',
        'bower_components/focuspoint/dist/focuspoint.css',
        'Focuspoint.js'
    ], 'client');
    api.export('Focuspoint', 'client');
});

Package.onTest(function(api) {
    api.use('lifelynl:focuspoint');
});
