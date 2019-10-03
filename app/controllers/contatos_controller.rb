class ContatosController < ApplicationController

    

    def show
        @contatos = Contato.order(nome: :desc)
        
    end


    def index
        @contato = Contato.new
    end

    def create
        @contato = Contato.new contato_params
        email = @contato.email.to_s
        @contato.email = email.downcase
        if @contato.save
            flash[:notice] = "Produto cadastrado com sucesso"
            redirect_to contatos_show_path
        else
            render :index

        end
        
    end


    private

    def contato_params
        params.require(:contato).permit(:nome,:email,:telefone,:mensagem)
    end

    def set_produto
        @contato = Contato.find(params[:id])
    end


end
