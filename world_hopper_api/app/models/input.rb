class Input < ApplicationRecord
    validates :name, presence: true
    validates :age, presence: true
    validates :country, presence: true
end
