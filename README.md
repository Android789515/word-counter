<div class='layout'>
    <h1>A simple app for measuring words, letters, and more.</h1>
    <h2>Mobile Sizes</h2>
    <div class='mobile-sizes'>
        <img class='mobile-img' src='screenshots/app-light-mobile.png' alt='Mobile Sizes' />
        <img class='mobile-img' src='screenshots/app-dark-mobile.png' alt='Mobile Sizes' />
    </div>
    <h2>Large Sizes</h2>
    <div class='large-sizes'>
        <img src='screenshots/app-light.png' alt='Mobile Sizes' />
        <img src='screenshots/app-dark.png' alt='Mobile Sizes' />
    </div>
</div>

<style>
    * {
        box-sizing: border-box;
    }


    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
    }

    img {
        display: block;

        max-width: 100%;
    }

    .layout {
        max-width: 50em;

        margin: auto;
    }

    .mobile-sizes {
        display: flex;
        justify-content: space-between;

        margin-bottom: 4em;
    }

    .mobile-img {
        width: 40%;
        max-width: 12.5em;
    }

    .large-sizes {
        display: grid;
        grid-row-gap: 4em;
    }
</style>