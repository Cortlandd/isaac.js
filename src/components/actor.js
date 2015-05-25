import { ctx } from '../canvas';

export default class Actor
{
    constructor( sizeX, sizeY, image=null )
    {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.image = image;
        this._x = null;
        this._y = null;

        if ( this.image )
        {
            this.ready = false;
            this._image = new Image();
            this._image.onload = () => this.ready = true;
            this._image.src = this.image;
        }
        else
        {
            this.ready = true;
        }
    }

    setImage( image, type='image' )
    {
        if ( type === 'canvas' )
        {
            this.image = true;
            this._image = image;
        }
        else if ( image !== this.image )
        {
            this.image = image;
            this.ready = false;
            this._image = new Image();
            this._image.onload = () => this.ready = true;
            this._image.src = this.image;
        }
    }

    get x()
    {
        return this._x;
    }

    set x( value )
    {
        this._x = value;
    }

    get y()
    {
        return this._x;
    }

    set y( value )
    {
        this._y = value;
    }


    get center()
    {
        return {
            x: this._x + this.sizeX / 2,
            y: this._y + this.sizeY / 2
        };
    }

    render()
    {
        const x = Math.round( this._x );
        const y = Math.round( this._y );

        // ctx.fillStyle = 'red';
        // ctx.fillRect( this._x, this._y, this.sizeX, this.sizeY );
        if ( this.image && this.ready )
        {
            ctx.drawImage( this._image, x, y );
        }
    }
}
