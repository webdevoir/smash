module Api
	module V1
		class ServicesController < ApplicationController
      			
			def index
				@service = Service.all
				render json: {status: 'SUCCESS', message:'Services lock and loaded', data:@service}, status: :ok
			end

			def show
				@service = Service.find(params[:id])
				render json: {status: 'SUCCESS', message:'Specific service loaded', data:@service}, status: :ok
			end
			
			def create
				@service = Service.new(service_params)
				if @service.save
					render json: {status: 'SUCCESS', message:'Saved new service, user-san', data:@service}, status: :ok
				else
					render json: {status: 'ERROR', message:'Service not saved, wonder why', data:@service.error}, status: :unprocessable_entity
				end
			end

			def destroy
				@service = Service.find(params[:id])
				@service.destroy
				render json: {status: 'SUCCESS', message:'Service succesfully erased from existance', data:@service}, status: :ok
			end

			def update
				@service = Service.find(params[:id])
				if @service.update_attributes(service_params)
					render json: {status: 'SUCCESS', message:'Updated service, move along', data:@service}, status: :ok
				else
					render json: {status: 'ERROR', message:'Could not update, blame the dev', data:@service.errors}, status: :unprocessable_entity
				end
			end

			def search
				if params[:order] != ''
					@services = Service.find(params[:order])
				else
					@services = Service.where("name ILIKE ? AND costumer ILIKE ? AND equipment LIKE ? AND company ILIKE ?",
						"%#{params[:name]}%", "%#{params[:costumer]}%", "%#{params[:equipment]}%", "%#{params[:company]}%")
				end
				render json: {status: 'SUCCESS', message:'services searched!', data:@services}, status: :ok
			end

			private
			def service_params
				params.permit(:order, :name, :cost, :costumer, :equipment, :company, :done_at, :next_service)
			end
		end
	end
end