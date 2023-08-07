import parsePond from '~/parsers/pond.parser';
import printHtml from '~/presenters';


function handleFiles( file )
{
    const reader = new FileReader();
    reader.onload = e =>
    {
        document.body.innerHTML = 'working...';
        Promise.resolve( resolve => setTimeout( resolve, 10 ) )
            .then( () =>
            {
                const result = parsePond( e.target.result );
                document.body.innerHTML = printHtml( result );
                window.result = result;
            } );
    };

    reader.readAsText( file );
}


document.getElementById( 'file' )
    .addEventListener( 'change', ev => handleFiles( ev.target.files[ 0 ] ) );
