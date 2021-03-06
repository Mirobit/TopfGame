import mongoose from 'mongoose';

const { Schema } = mongoose;

const gameSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    shortUrl: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
      default: '',
    },
    videoLink: {
      type: String,
      required: false,
    },
    totalRounds: {
      type: Number,
      required: true,
    },
    timer: {
      type: Number,
      required: true,
    },
    timeLeft: {
      type: Number,
      required: true,
      default: 0,
    },
    wordsCount: {
      type: Number,
      required: true,
      default: 3,
    },
    currentRound: {
      type: Number,
      required: true,
      default: 1,
    },
    curWordIndex: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      enum: ['new', 'started', 'ended'],
      default: 'new',
    },
    adminName: { type: String, required: true },
    players: [
      {
        name: {
          type: String,
          required: true,
        },
        role: {
          type: String,
          enum: ['user', 'admin'],
          default: 'user',
        },
        status: {
          type: String,
          enum: [
            'unready',
            'submitted',
            'ready',
            'playing',
            'explaining',
            'guessing',
            'disconnected',
            'quit',
          ],
          default: 'unready',
        },
        score: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
    words: [
      {
        string: {
          type: String,
          required: true,
        },
        guessed: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

export default mongoose.model('Games', gameSchema);
