# frozen_string_literal: true

# spec/rice_cooker_spec.rb
require_relative 'main'

RSpec.describe RiceCooker do
  let(:rice_cooker) { RiceCooker.new }

  describe '#add_rice' do
    it 'adds rice when not already present' do
      rice_cooker.add_rice
      expect(rice_cooker.rice_present).to be true
    end
  end
end
