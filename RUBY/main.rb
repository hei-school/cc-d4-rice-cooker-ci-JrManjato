# frozen_string_literal: true

# This class represents a RiceCooker.
class RiceCooker
  def initialize
    @rice_present = false
    @rice_cooked = false
    @heating_in_progress = false
  end

  def add_rice
    if !@rice_present
      @rice_present = true

      puts 'Rice has been added.'
    else
      puts 'There\'s already rice in the rice cooker.'
    end
  end

  def cook_rice
    if @rice_present && !@rice_cooked
      puts 'Cooking rice...'
      sleep(2)
      @rice_cooked = true
      puts 'The rice has been cooked!'
    elsif !@rice_present
      puts 'Cannot cook. The rice cooker is empty.'
    else
      puts 'The rice is already cooked.'
    end
  end

  def keep_warm
    if @rice_present && @rice_cooked && !@heating_in_progress
      @heating_in_progress = true
      puts 'The rice is now being kept warm.'
    elsif !@rice_present
      puts 'Cannot keep warm. The rice cooker is empty.'
    elsif !@rice_cooked
      puts 'Cannot keep warm. The rice is not cooked.'
    else
      puts 'Keeping warm is already in progress.'
    end
  end

  def remove_rice
    if @rice_present
      @rice_present = false
      @rice_cooked = false
      @heating_in_progress = false
      puts 'The rice has been removed from the rice cooker.'
    else
      puts 'There\'s no rice to remove or it is not cooked yet.'
    end
  end
end

def display_menu
  return if ARGV.include?('test')

  puts "\nWelcome to the Rice Cooker Simulator!"
  puts '1. Add rice'
  puts '2. Cook rice'
  puts '3. Keep warm'
  puts '4. Remove rice'
  puts '5. Quit'
end

def simulate_rice_cooker
  return if ARGV.include?('test')

  rice_cooker = RiceCooker.new

  loop do
    display_menu
    process_user_choice(rice_cooker)
  end
end

def process_user_choice(rice_cooker)
  print 'Enter your choice: '
  choice_input = gets&.chomp
  choice = parse_choice(choice_input)

  case choice
  when 1 then rice_cooker.add_rice
  when 2 then rice_cooker.cook_rice
  when 3 then rice_cooker.keep_warm
  when 4 then rice_cooker.remove_rice
  when 5
    puts 'Thank you for using the Rice Cooker Simulator. Goodbye!'
    exit
  else
    puts 'Invalid choice. Please select a valid option.'
  end
end

def parse_choice(choice_input)
  choice_input ? choice_input.to_i : gets&.chomp&.to_i
end

simulate_rice_cooker
