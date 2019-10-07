class RastreiosController < ApplicationController

    def index
        @rastreios = Rastreio.order(id: :desc).limit 50
    end


    def create
        @rastreio = Rastreio.new rastreio_params
        if @rastreio.save
        end    
    end


    private

    def rastreio_params
        params.require(:rastreio).permit(:guid,:url,:data)
    end
    
    def set_rastreio
        @rastreio = Rastreio.find(params[:id])
    end


end
